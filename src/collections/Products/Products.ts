import { MANGA_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";
import { Product } from "@/payload-types";
import {
  AfterChangeHook,
  BeforeChangeHook,
} from "payload/dist/collections/config/types";
import { stripe } from "../../lib/stripe";

const adduser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user;

  return { ...data, user: user.id };
};

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  hooks: {
    beforeChange: [adduser,async (args) =>{
        if(args.operation === "create"){
                const data = args.data as Product

                const createdProduct = await stripe.products.create({
                    name:data.name,
                    default_price_data:{
                        currency:"INR",
                        unit_amount:data.price
                    }
                })
                const updated: Product = {
                    ...data,
                    stripeId: createdProduct.id,
                    pricedId: createdProduct.default_price as string
                }
                return updated
        }else if(args.operation === 'update'){
            const data = args.data as Product

            const updatedProduct = await stripe.products.update(data.stripeId!,{
                name:data.name,
                default_price:data.pricedId!,
            })
            const updated: Product = {
                ...data,
                stripeId: updatedProduct.id,
                pricedId: updatedProduct .default_price as string
            }
            return updated
        }
    }],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Manga Detail",
    },
    {
      name: "price",
      label: "Price in inr",
      min: 10,
      max: 1000,
      type: "number",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: MANGA_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },
    {
      name: "product_files",
      label: "product file(s)",
      type: "relationship",
      required: true,
      relationTo: "product_files",
      hasMany: false,
    },
    {
      name: "approvedForSale",
      label: "Product Status",
      type: "select",
      defaultValue: "pending",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "Pending verification",
          value: "pending",
        },
        {
          label: "Approved",
          value: "approved",
        },
        {
          label: "Denied",
          value: "denied",
        },
      ],
    },
    {
      name: "pricedId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "stripeId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "images",
      type: "array",
      label: "manga images",
      minRows: 1,
      maxRows: 2,
      required: true,
      labels: {
        singular: "image",
        plural: "images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

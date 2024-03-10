import { MANGA_CATEGORIES } from "../../config";

import { CollectionConfig } from "payload/types";

export const AnimeProduct: CollectionConfig={
   slug:'animeproduct',
   admin:{
    useAsTitle:'name',
   },
   access:{},
   fields:[
    {
        name:'user',
        type:'relationship',
        relationTo:'users',
        required:true,
        hasMany:false,
        admin:{
            condition:()=>false
        }
    },
    {
        name:'name',
        label:'name',
        type:'text',
        required:true,
    },
    {
        name: "description",
        type: "textarea",
        label: "Anime Detail",
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: MANGA_CATEGORIES.map(({ label, value }) => ({ label, value })),
        required: true,
      },
      {
        name: "anime_files",
        label: "anime files(s)",
        type: "relationship",
        required: true,
        relationTo: "anime_files",
        hasMany: false,
      }, 
      {
        name: "approvedForupload",
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
        name: "images",
        type: "array",
        label: "manga images",
        minRows: 1,
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
   ]
}
import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { User } from "../payload-types";
import { Access, CollectionConfig } from "payload/types";

const addUser : BeforeChangeHook= ({req,data}) => {
    const user = req.user as User | null
    return {...data,user:user?.id} 
}
const yourOwn : Access = async ({ req }) => {
    const user = req.user as User | null
    if(user?.role === 'admin') return true
    if(!user) return false

    const { docs: Animeproducts } = await req.payload.find({
        
        collection:'animeproduct',
        where:{
            user:{
                equals: user.id,
            },
        }
    })

    const yourOwnd = Animeproducts.map((prod) => prod.anime_files).flat()

    return{
        id:{
            in:[...yourOwnd]
        }
    }
}
export const AnimeFile:CollectionConfig = {
    slug: "anime_files",
    admin: {
        hidden:({user})=> user.role !== 'admin',
    },
    hooks : {
        beforeChange:[ addUser ]
    },
    upload:{
        staticURL:"/anime_files",
        staticDir:"anime_files",
        mimeTypes:['video/*'],
    },
    access:{
        
        update: ({req}) => req.user.role === 'admin',
        delete: ({req}) => req.user.role === 'admin'

    },
    fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            condition: () => false,
          },
          hasMany: false,
          required: true,
        },
      ],
}
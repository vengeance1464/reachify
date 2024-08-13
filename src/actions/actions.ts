'use server'

import { trpc } from "@/server/client"
import SpaceService from "@/lib/db/SpaceService"
import { TestimonialType } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


async function createSpaceAction(formData:FormData)
{  


    console.log("data",Object.fromEntries(formData))
    const  spaceName=formData.get("space-name")
    const headerTitle=formData.get("header-title")
    const customMessage=formData.get("custom-message")
    const testimonialTypeStringified=formData.get("testimonial-type") as string
    const shouldCollectStars=formData.get("collect-stars")==='on'
    let questionsList=[]
    let testimonialType=null
    if(testimonialTypeStringified!==null)
    {
     testimonialType=JSON.parse(testimonialTypeStringified).text
    }
    
    const questionsLength=Object.entries(Object.fromEntries(formData)).filter(([key, value]) => key.includes('questions')).length
    for(let i=0;i<questionsLength;i++)
    {
      const value = formData.get(`questions.${i}.name`)
      questionsList.push(value?.toString())
    }

    console.log("Questions Length",questionsLength)
        
      //   .reduce((accum:any,curr:any)=>{
      //     console.log("Accum",accum,curr)
      // })

     const spaceBody={
        spaceName:spaceName,
        headerTitle:headerTitle,
        customMessage:customMessage,
        questions:questionsList,
        testimonialType:TestimonialType[testimonialType!],
        collectStars:shouldCollectStars,
        //reviews:{set:[]}
     }

    console.log("spaceBody",spaceBody)
    console.log("testimonial type",testimonialType)
    let spaceService=new SpaceService('Space')
    const space = await spaceService.create(spaceBody);
    revalidatePath("/dashboard")
    redirect("/dashboard")

    //const createUser = trpc.space.createSpace.useMutation();
    //await createUser.mutateAsync(spaceBody);
    //await trpc.space.createSpace.useQuery();
   
    
}

export {createSpaceAction}
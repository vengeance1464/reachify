'use server'

import { trpc } from "@/server/client"
import SpaceService from "@/lib/db/SpaceService"
import { TestimonialType } from "@prisma/client"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import ReviewService from "@/lib/db/ReviewService"
import { v4 as uuidv4 } from 'uuid';
import { getS3Url } from "@/lib/utils"
import { trpcClient } from "@/server"


async function createSpaceAction(previousState:boolean,formData:FormData)
{  


    console.log("data",Object.fromEntries(formData))
    const body = new FormData();
    const file = formData.get('imageUpload') as File;
    const name=`${uuidv4()}${file.name}`
    body.append("file", file, name);

  //   con
  //   const body = new FormData();
  //    arg.files.forEach((file) => {
  //   body.append("file", file, file.name);
  // });
    // const response = await fetch(
    //   process.env.NEXT_PUBLIC_BASE_URL + '/api/aws/fileUpload',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ filename: file.name, contentType: file.type }),
    //   }
    // )
    // if (response.ok) {
    //   const { url, fields } = await response.json()

    //   const imageData = new FormData()
    //   Object.entries(fields).forEach(([key, value]) => {
    //     imageData.append(key, value as string)
    //   })
    //   imageData.append('file', file)

      //let options = { headers: { 'Content-Type': file.type, 'x-amz-acl': 'public-read' } };


      const uploadResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/aws/fileOperations/${name}`, {
        method: 'POST',
        body,
     //  headers: options.headers,
      })

      console.log

      if (uploadResponse.ok) {
        //alert('Upload successful!')
      } else {
        console.error('S3 Upload Error:', uploadResponse)
        //alert('Upload failed.')
      }
    // } else {
    //   //alert('Failed to get pre-signed URL.')
    // }

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
        spaceUrl:getS3Url(name)
        //reviews:{set:[]}
     }

    console.log("spaceBody",spaceBody)
    console.log("testimonial type",testimonialType)
    let spaceService=new SpaceService('Space')
    const space = await spaceService.create(spaceBody);
    return true
   

    //const createUser = trpc.space.createSpace.useMutation();
    //await createUser.mutateAsync(spaceBody);
    //await trpc.space.createSpace.useQuery();
   
    
}

async function archiveOrUnarchiveReview(reviewId:string,isArchived:boolean)
{
  console.log("Is archived",isArchived)
  let reviewService=new ReviewService('Review')
  const res=await reviewService.archiveOrUnarchiveReview(reviewId,isArchived)
  console.log("Archive Res",res)
  return res
}

  async function revalidateData(tagName:string) {
  revalidateTag(tagName)
}

async function deleteSpaceReview(reviewId:string)
{
  console.log("Review Id",reviewId)
  const data=await trpcClient.space.deleteReview(
    reviewId
  );

  //callbackFn()
  //revalidateData("reviews")
  return true
  
  //revalidatePath(`/products/${spaceId}/${spaceName}`)
  // let reviewService=new ReviewService('Review')
  // const res=await reviewService.delete(reviewId)
  // console.log("Delete Res",res)
  //return res
}


export {createSpaceAction,archiveOrUnarchiveReview,revalidateData,deleteSpaceReview}
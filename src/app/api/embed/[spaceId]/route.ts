import { NextApiRequest } from "next";
import SpaceService from "@/lib/db/SpaceService";

type Params={
  spaceId:string
}
export async function GET(
  request: Request, context: { params: Params }
  ) {
    const spaceService=new SpaceService('Space')
    const spaceData=await spaceService.findUnique({
      where :{
        id:context.params.spaceId
      }
    })
    return Response.json({ data:spaceData })
  }

  export async function POST(
    request: Request, context: { params: Params }
    ) {
      const body=await request.json()
      const spaceService=new SpaceService('Space')
      console.log("req",body,"context",context)
      await spaceService.addReview(context.params.spaceId,body)
      await spaceService.incrementReviewCount(context.params.spaceId)
      // const spaceData=await spaceService.addReview({
      //   where :{
      //     id:context.params.spaceId
      //   }
      // })
      return Response.json({ data:{} })
    }
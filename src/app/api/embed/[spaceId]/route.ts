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
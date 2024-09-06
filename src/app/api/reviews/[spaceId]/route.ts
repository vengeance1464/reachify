// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import ReviewService from "@/lib/db/ReviewService"
import SpaceService from "@/lib/db/SpaceService"

// import { appRouter } from "@/server";

// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: "/api/users",
//     req,
//     router: appRouter,
//     createContext: () => ({}),
//   });
type Params={
  spaceId:string
}

// export { handler as GET, handler as POST };

// export async function DELETE(request: Request,context: { params: Params }) {
//   let reviewService=new ReviewService('Review')
//   const data=reviewService.delete({id:input})

// }



export async function GET(request: Request,context: { params: Params }) {
let spaceService=new SpaceService('Space')
console.log("Space Id",context.params.spaceId)
const data=await spaceService.getSpaceWithReviews(context.params.spaceId)
console.log("Data",data)
return  Response.json({data})
}
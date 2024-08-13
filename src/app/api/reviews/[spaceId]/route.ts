import ReviewService from "@/lib/db/ReviewService";

type Params={
  spaceId:string
}
export async function GET(
  request: Request, context: { params: Params }
  ) {
    const reviewService=new ReviewService('Review')
    console.log("SPaceidc",context.params.spaceId)
    const reviews=await reviewService.getSpaceReviews(context.params.spaceId)
    return Response.json({ data:reviews })
  }
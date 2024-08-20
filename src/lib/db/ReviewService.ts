import BaseService from "./BaseService";

class ReviewService extends BaseService<'Review'> {


    async getSpaceReviews(spaceId:string)
    {
        const filterQuery= {where: {
            spaceId // Replace with the actual Space ID
        }}

        const reviews=await this.findMany(filterQuery)
        console.log("Reviews",reviews)
        return reviews
    }

    async archiveOrUnarchiveReview(reviewId:string,archive:boolean)
    {

        const review=await this.findUnique({
            where:{
                id:reviewId
            }
        })

        if(review)
        {
            const updatedReview=await this.update({
                where:{
                    id:reviewId
                },
                data:{
                    isArchived:archive
                }
            })
            return updatedReview
        }
        else
        {
            throw new Error("Review not found")
        }
    }
}


export default ReviewService;
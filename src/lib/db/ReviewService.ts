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
}


export default ReviewService;
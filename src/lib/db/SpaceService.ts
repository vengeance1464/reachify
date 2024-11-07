import BaseService from "./BaseService";

class SpaceService extends BaseService<'Space'> {
  

    // async createSpace(input:any)
    // {
    //     const data={...input,reviews:{set:[]}}
    //     return await this.create(data)
    // }
    async addReview(spaceId:string,data:any)
    {

        const reviewData={
            where: { id: spaceId }, // Specify the User by their ID or any unique identifier
            data: {
                reviews: {create:[{
                  ...data
                }]},
            },
          }
        return await this.update(reviewData)
    }

    async getSpaceWithReviews(spaceId:string)
    {
      let spaceWithReviews=[]
       spaceWithReviews = await this.findUnique({
        where: {
          id: spaceId, // Replace with the actual user ID
        },
        include: {
          reviews: true,  // This will include the related Post documents
        }
      });

      console.log("Space",spaceWithReviews)


      return spaceWithReviews;
    }

    async incrementReviewCount(spaceId:string)
    {

     let space = await this.findUnique({
       where: {
         id: spaceId, // Replace with the actual user ID
       }
     });
     let updatedSpace

     if(space && space!==null)
     {
      let textReviewCount=space.textReviewCount
      textReviewCount++
      updatedSpace= this.update({
        where:{
            id:spaceId
        },
        data:{
          textReviewCount:textReviewCount
        }
    })
     }

     return updatedSpace

    }

}

export default SpaceService;
/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import SpaceService from '@/lib/db/SpaceService';
import { isAuthenticated } from '../middleware/auth';
import ReviewService from '@/lib/db/ReviewService';
//import { protectedProcedure } from '../trpc';

export const appRouter = router({
  // getAllReviews:publicProcedure.use(isAuthenticated).input(
  //   z.string(),
  // ).query(async ({ input, ctx }) => {
  //   // Replace with your database call
  //   console.log("context ",input)
  //  // let reviewsService=new ReviewService('Review')
  //   //const data=reviewsService.getSpaceReviews()
  //   return "";
  // }),
   createSpace:publicProcedure
   .use(isAuthenticated)
  .mutation(async ({ input }) => {
    let spaceService=new SpaceService('Space')
    const space = await spaceService.create(input);
    console.log("Space",space)
    return space;
  }),

  getSpaceWithReviews:publicProcedure.use(isAuthenticated).input(z.string()).query(async ({ input, ctx }) => {
    // Replace with your database call
    console.log("context ",input)
    let spaceService=new SpaceService('Space')
    const data=spaceService.getSpaceWithReviews(input)
    return data;
  }),
  deleteReview:publicProcedure.use(isAuthenticated).input(z.string()).mutation(async ({ input, ctx }) => {
    // Replace with your database call
    console.log("context ",input)
    let reviewService=new ReviewService('Review')
    const data=reviewService.delete({
      where: {
        id: input, // Ensure this is a valid string
      }})
    return data;
  })
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
//export type AppRouter = typeof appRouter;

// export API handler
// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createContext: () => ({}),
// });

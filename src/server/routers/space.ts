/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import SpaceService from '@/lib/db/SpaceService';

export const appRouter = router({
   getAllSpaces:publicProcedure.query(async ({ input, ctx }) => {
    // Replace with your database call
    let spaceService=new SpaceService('Space')
    const data=spaceService.findMany()
    return data;
  }),
   createSpace:publicProcedure
   //.mutation((opts) => {
  //   const { input } = opts;
  //   // const newCat: Cat = { id: newId(), name: input.name };
  //   // cats.push(newCat)
  //   // return newCat
  // })
  //})
  .mutation(async ({ input }) => {
    let spaceService=new SpaceService('Space')
    const space = await spaceService.create(input);
    console.log("Space",space)
    return space;
  }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
//export type AppRouter = typeof appRouter;

// export API handler
// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createContext: () => ({}),
// });

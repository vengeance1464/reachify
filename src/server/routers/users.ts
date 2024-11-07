/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

import { z } from 'zod';
import {  publicProcedure, router } from '../trpc';
import UserService from '@/lib/db/UserService';

export const appRouter = router({
   addUser:publicProcedure.input(
    z.object({
      userId: z.string(),
      email: z.string(),
      name: z.string(),
      imageUrl:z.string()
    })
  ).mutation( async ({input})  => {
    // Replace with your database call
   // const context=opts.ctx as Context
    //const user=context.user
    const {email,...restUserData}=input! 
    let userService=new UserService('User')
    const data=await userService.createUserIfNotExists(email,restUserData)
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

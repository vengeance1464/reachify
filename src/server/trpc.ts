/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @link https://trpc.io/docs/v11/router
 * @link https://trpc.io/docs/v11/procedures
 */
import { Space, User } from '@prisma/client';
import { initTRPC } from '@trpc/server';
import { NextApiRequest, NextApiResponse } from 'next';
//import { getSession } from 'next-auth/react';
import { getSession } from "next-auth/react"
import { isAuthenticated } from './middleware/auth';
//import { unstable_getServerSession } from "next-auth";

export type Context = {
    /**
     * User is nullable
     */
    user: User | null;
    space:Space|null
  };


  // export const createContext = async ({ req, res }: { req: NextApiRequest, res: NextApiResponse }) => {
  //   //const session = await getSession({ req });
  //   //getServerSession(ctx.req, ctx.res, authOptions);
  //   const session = await getSession({req});
  //   return {
  //     req,
  //     res,
  //     session,
  //   };
  // };

  // export const createContext = async (opts: CreateNextContextOptions) => {
  //   const { req, res } = opts;
  //   const session = await getServerAuthSession({ req, res });
  //   return await createContextInner({
  //     session,
  //   });
  // };

export const t = initTRPC.context<Context>().create();

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

// export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
//   if (!ctx.session || !ctx.session.user) {
//     throw new Error('Unauthorized');
//   }
//   return next();
// });

//export const protectedProcedure = t.procedure.use(isAuthenticated);

export const router = t.router;


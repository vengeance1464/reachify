import { appRouter as spaceRouter } from "./routers/space";
import { appRouter as userRouter } from "./routers/users";
import { router, t } from "./trpc";

export const appRouter = router({
  space: spaceRouter,
  user:userRouter
});

export type AppRouter = typeof appRouter;

 const  callerFactory=t.createCallerFactory

  const createCaller=callerFactory(appRouter)

 export const trpcClient=createCaller({})

 

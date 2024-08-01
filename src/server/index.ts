import { appRouter as spaceRouter } from "./routers/space";
import { router } from "./trpc";

export const appRouter = router({
  space: spaceRouter,
});

export type AppRouter = typeof appRouter;
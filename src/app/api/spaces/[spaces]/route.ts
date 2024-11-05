import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";
import { Context } from "@/server/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/users",
    req,
    router: appRouter,
    createContext: () => ({} as Context) ,
  });

export { handler as GET, handler as POST };
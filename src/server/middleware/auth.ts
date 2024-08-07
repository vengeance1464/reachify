// src/server/middleware/auth.ts
import { TRPCError } from '@trpc/server';
import { t } from '../trpc'; // assuming trpc instance is defined in trpc.ts
import { auth } from '@/auth';

export const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  const session = await auth();

  if (!session?.user) {
    console.log("user not authorized",ctx)
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  ctx.user = session.user as any;
  return next();
});

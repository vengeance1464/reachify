// src/server/middleware/auth.ts
import { TRPCError } from '@trpc/server';
import { t } from '../trpc'; // assuming trpc instance is defined in trpc.ts

export const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    console.log("user not authorized")
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next();
});

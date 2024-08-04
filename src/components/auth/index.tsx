import { auth } from "@/auth";
import { AppRouter, trpcClient } from "@/server";
import { inferProcedureInput } from "@trpc/server";
import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

const AuthComponent: React.FC<Props> = async ({ children }) => {
  const session = await auth();

  //const currentPath = router.pathname;
  console.log("session", session);
  if (!session?.user) return null;

  const input: any = {
    userId: session.user.id,
    name: session.user.name,
    email: session.user.email,
    imageUrl: session.user.image,
  };
  console.log("Input", input);

  await trpcClient.user.addUser(input);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default AuthComponent;

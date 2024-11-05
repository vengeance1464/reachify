import { auth } from "@/auth";
import { SignIn } from "@/components/auth/sign-in";
import Typography from "@/components/typography";
import { redirect } from "next/navigation";
import React from "react";

const Login: React.FC = async () => {
  const session: any = await auth();
  console.log("session", session);

  if (session !== null) {
    redirect("/dashboard");
  }
  return (
    <div className="flex justify-center  h-screen">
      <div className=" flex flex-col bg-[#25282C] justify-center items-center h-[75vh] w-[50vw]">
        <Typography classes="text-white" type={"h2"} text={"Welcome Back!"} />

        <SignIn />
      </div>
    </div>
  );
};

export default Login;

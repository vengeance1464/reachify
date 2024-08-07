import { SignIn } from "@/components/auth/sign-in";
import React from "react";

interface Props {
  name: string;
}

const Login: React.FC<Props> = () => {
  return (
    <div className="m-20">
      <SignIn />
    </div>
  );
};

export default Login;

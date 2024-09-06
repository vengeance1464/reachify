import React, { ReactNode } from "react";
import Typography from "../typography";
import Image from "next/image";
import { auth } from "@/auth";
import Like from "../../../public/assets/like";
import { redirect } from "next/navigation";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = async ({ title }) => {
  const session = await auth();

  return (
    <div className="flex items-center bg-navy-blue w-screen top-0  justify-between mt-2 ">
      <div
        // onClick={() => {
        //   redirect("/dashboard");
        // }}
        className="flex items-center"
      >
        <Like width={50} height={50} />
        <Typography type="h3" text={title} classes="text-white" />
      </div>
      <Image
        alt="profile image"
        src={session?.user ? session.user.image : ""}
        className="rounded-full mr-10"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Header;

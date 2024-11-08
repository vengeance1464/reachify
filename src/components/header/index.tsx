import React, { ReactNode } from "react";
import Typography from "../typography";
import Image from "next/image";
import { auth } from "@/auth";
import Like from "../../../public/assets/like";
import { redirect } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = async ({ title }) => {
  const session: any = await auth();
  console.log("session", session);

  return (
    <div className="flex items-center bg-navy-blue w-screen top-0  justify-between mt-2 ">
      <Link href="/dashboard">
        <div
          // onClick={() => {
          //   redirect("/dashboard");
          // }}
          className="flex items-center"
        >
          <Like width={50} height={50} />
          <Typography type="h3" text={title} classes="text-white" />
        </div>
      </Link>
      {session && session !== null && session.user && (
        <Image
          alt="profile image"
          src={session?.user ? session.user.image : ""}
          className="rounded-full mr-10"
          width={40}
          height={40}
        />
      )}
      {(!session || session === null) && (
        <Link href={"/login"}>
          <div
            style={{ marginRight: "50px" }}
            className="bg-purple text-white mr-50px"
          >
            Sign In
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;

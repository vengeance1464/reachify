"use client";
import React, {
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

interface ProgressLinkProps {
  href: string;
  children?: any;
  replace: boolean;
}

const ProgressLink: React.FC<ProgressLinkProps> = ({
  href,
  children,
  replace = false,
  ...rest
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <>Pending navigation</>;
  }
  return (
    <NextLink
      href={href}
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => {
          const url = href.toString();
          if (replace) {
            router.replace(url);
          } else {
            router.push(url);
          }
        });
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
};

export default ProgressLink;

"use client";
import { trpc } from "@/server/client";
import React from "react";

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  let { data, isLoading, isFetching } = trpc.space.getUser.useQuery();

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default MyComponent;

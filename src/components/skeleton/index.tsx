import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonLoader: React.FC = () => {
  return (
    <>
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </>
  );
};

export default SkeletonLoader;

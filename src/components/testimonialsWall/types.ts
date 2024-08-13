import { ReactNode } from "react";

 export enum LayoutType {
    FIXED,
    CAROUSEL,
    ANIMATED,
  }
  type WallProps = {
    spaceId: string;
    layoutType: LayoutType;
  };

  type LayoutProps={
    layoutType:LayoutType;
    children:ReactNode;
  }

export type {WallProps,LayoutProps}
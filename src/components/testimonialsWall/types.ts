import { ReactNode } from "react";

 export enum LayoutType {
    FIXED="fixed",
    CAROUSEL="carousel",
    ANIMATED="animated",
  }
  type WallProps = {
    spaceId: string;
    layoutType: string;
  };

  type LayoutProps={
    layoutType:LayoutType;
    children:ReactNode;
  }

export type {WallProps,LayoutProps}
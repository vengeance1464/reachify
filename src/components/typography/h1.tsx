import React from "react";

export function TypographyH1({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${classes}`}
    >
      {text}
    </h1>
  );
}

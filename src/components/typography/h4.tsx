import React from "react";

export function TypographyH4({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${classes}`}
    >
      {text}
    </h4>
  );
}

import React from "react";
export function TypographyH3({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h3
      className={`text-foreground scroll-m-20 text-2xl font-semibold tracking-tight ${classes}`}
    >
      {text}
    </h3>
  );
}

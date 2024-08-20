import React from "react";

export function TypographyH2({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${classes}`}
    >
      {text}
    </h2>
  );
}

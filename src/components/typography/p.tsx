export function TypographyP({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return <p className={`leading-7  ${classes}`}>{text}</p>;
}

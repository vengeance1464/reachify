import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getS3Url(fileName: string) {
  const url = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
  return url
}
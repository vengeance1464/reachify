import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function getS3Url(fileName: string) {
  const url = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
  return url
}


export function generateEmphasizePropmt(reviewText:string)
{
  console.log("Review",reviewText)
  const obj={
    text:reviewText
  }
  return `Emphasize and highlight most impactful sentences using strong tag and yellow highlight background in the following review text inside text key in the following json object and dont remove any text and give output in the form of HTML string with highights  and give only the output in the form of json with a key review containing the html string and not any other additional text.Only output the stringified json no characters must be appended before it and after it.-${JSON.stringify(obj)}`
}


export function extractJSONFromString(jsonString:string)
{
  const jsonMatch = jsonString.match(/{.*}/);
  console.log('Json string',jsonString)
if (jsonMatch) {
  try {
    const jsonObject = JSON.parse(jsonMatch[0]);
    console.log("object",jsonObject)
     return jsonObject // { name: "John", age: 30, city: "New York" }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
} else {
  console.error("No valid JSON found in the input string.");
}

}
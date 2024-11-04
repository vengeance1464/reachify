import OpenAI from "openai";
import { mapInputToMessage } from "../types";


const getResponse=async (inputObj)=>{
const {inputText}=inputObj
const inputMessage=mapInputToMessage("gpt-4o-mini",inputText)
console.log("key",process.env.NEXT_PUBLIC_OPENAI_API_KEY)
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  const response = await openai.chat.completions.create(inputMessage)
  const ouputMessage=response.choices[0].message
   console.log("Response",ouputMessage)
   return ouputMessage
}


export {getResponse}
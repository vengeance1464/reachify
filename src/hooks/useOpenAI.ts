import {useEffect, useState} from 'react'
import { getResponse } from './service'
import { ChatCompletionMessage } from 'openai/resources/index.mjs'
import { extractJSONFromString } from '@/lib/utils'


const useOpenAI=()=>{
 
const [inputMessage,setInputMessage]=useState<String[]|null>(null)
const [response,setResponse]=useState<any>()

useEffect(()=>{
async function getAIResponse()
{
  const response=await getResponse({inputText:inputMessage})
  setResponse({...extractJSONFromString(response.content!)})
  setInputMessage(null)
}

if(inputMessage!==null)
getAIResponse()
},[inputMessage])


const submitPrompt=(inputText:any)=>{
      
    setInputMessage(inputText)
}

return {response,submitPrompt}

}

export {useOpenAI}
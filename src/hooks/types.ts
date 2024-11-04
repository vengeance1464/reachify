import { ChatCompletionMessageParam, ResponseFormatJSONObject, ResponseFormatJSONSchema, ResponseFormatText } from "openai/resources/index.mjs";


interface InputType{
    model:string;
    messages:ChatCompletionMessageParam[],
    // temperature:Number,
    // max_tokens:Number,
    // top_p:Number,
    // frequency_penalty:Number,
    // presence_penalty:Number,
   // response_format:ResponseFormatText | ResponseFormatJSONObject | ResponseFormatJSONSchema | undefined
}


const mapInputToMessage=(model,text)=>{

const messages=text.map(item=>{
    const finalObj:ChatCompletionMessageParam={
        role:"user",
        content:[{
            type:"text",
            text:item
        }]

    }
    return finalObj
})

 let messageObj:InputType={
 model:model,
 messages:messages,
//  temperature: 1,
//  max_tokens: 2048,
//  top_p: 1,
//  frequency_penalty: 0,
//  presence_penalty: 0,
//  response_format: {
//    type: "json_object"
//  },


 }


return messageObj

}

export {mapInputToMessage}
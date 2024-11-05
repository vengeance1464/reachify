'use client'
import { FormContext } from "@/contexts/FormContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";


const useCustomForm = (contextType:string ) => {

     const {formMap}=useContext(FormContext)

    

    const { register, handleSubmit, formState: { errors },watch,control ,getValues,trigger} = useForm({
        mode: "onBlur",
    reValidateMode: "onBlur",
    });

     if(formMap?.has(contextType))
    {
        const value =formMap.get(contextType)
        return {register:value.register, handleSubmit:value.handleSubmit, errors:value.errors}
    }

    formMap?.set(contextType,{register, handleSubmit, errors})
    return { register, handleSubmit, errors,watch,control ,getValues,trigger};

 
};


export {useCustomForm}
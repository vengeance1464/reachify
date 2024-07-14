import { FormContext } from "@/contexts/FormContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";


const useCustomForm = (contextType:string ) => {

     const {formMap}=useContext(FormContext)

     if(formMap?.has(contextType))
    {
        const value =formMap.get(contextType)
        return {register:value.register, handleSubmit:value.handleSubmit, errors:value.errors}
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    formMap?.set(contextType,{register, handleSubmit, errors})
    return { register, handleSubmit, errors };

 
};


export {useCustomForm}
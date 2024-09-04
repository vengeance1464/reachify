 type InputType= {
    value?: string;
    onChange?: (value: string) => void;
    register: any;
    required?: boolean;
    name:string;
    label?: string;
    defaultValue?:string
    classes?:string
    hasError?:boolean
    errorMessage?:string
    trigger?:any
}


export {InputType}
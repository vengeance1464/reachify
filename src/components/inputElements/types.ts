 type InputType= {
    value?: string;
    onChange?: (value: string) => void;
    register: any;
    required?: boolean;
    name:string;
    label: string;
    defaultValue?:string
}


export {InputType}
import React from "react";
import { InputType } from "./types";
import { useForm } from "react-hook-form";

const InputElement: React.FC<InputType> = ({
  label,
  type,
  name,
  required = false,
  defaultValue,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col">
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <input
        defaultValue={defaultValue}
        {...register(name, { required })}
        className="border border-gray-300 px-4 py-2 rounded-md mt-2"
        type={type}
      />
    </div>
  );
};

export default InputElement;

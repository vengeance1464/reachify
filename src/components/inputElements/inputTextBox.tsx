import React from "react";
import { InputType } from "./types";

const InputTextElement: React.FC<InputType> = ({
  label,
  name,
  required = false,
  register,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <input
        {...register(name, { required })}
        defaultValue={defaultValue}
        className="border border-gray-300 px-4 py-2 rounded-md mt-2"
        type={"text"}
      />
    </div>
  );
};

export default InputTextElement;

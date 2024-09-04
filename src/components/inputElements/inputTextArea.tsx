import React, { ChangeEvent } from "react";
import { InputType } from "./types";

const InputTextArea: React.FC<InputType> = ({
  register,
  required,
  label,
  name,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <textarea
        name={name}
        className={`border border-gray-300 px-4 py-2 rounded-md mt-2  ${
          errorMessage !== ""
            ? "border border-red-600"
            : "border border-gray-300"
        } `}
        {...register(name, {
          required: required ? "This field is requried" : "",
        })}
      />
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default InputTextArea;

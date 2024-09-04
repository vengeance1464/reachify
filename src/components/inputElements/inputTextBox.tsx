import React from "react";
import { InputType } from "./types";

const InputTextElement: React.FC<InputType> = ({
  label,
  name,
  required = false,
  register,
  defaultValue,
  classes,
  hasError = false,
  errorMessage = "",
  trigger,
}) => {
  // const handleBlur = async (field) => {
  //   await trigger(field); // Trigger validation on blur
  // };
  return (
    <div className={`flex flex-col`}>
      {label && (
        <div className="flex">
          <label className="text-textBlack">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <input
        {...register(name, {
          required: required ? `This field is required` : "",
        })}
        defaultValue={defaultValue}
        name={name}
        //onBlur={() => handleBlur(name)} // Call handleBlur on blur event
        className={` ${
          errorMessage !== ""
            ? "border border-red-600"
            : "border border-gray-300"
        } px-4 py-2 rounded-md mt-2 ${classes}`}
        type={"text"}
      />
      {errorMessage !== "" && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default InputTextElement;

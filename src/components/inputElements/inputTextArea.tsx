import React, { ChangeEvent } from "react";
import { InputType } from "./types";

const InputTextArea: React.FC<InputType> = ({
  register,
  required,
  label,
  name,
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
        className="border border-gray-300 px-4 py-2 rounded-md mt-2"
        {...register(name, { required })}
      />
    </div>
  );
};

export default InputTextArea;

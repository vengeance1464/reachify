import React from "react";

type CheckboxProps = {
  text: string;
  checked?: boolean;
  onChange?: () => void;
};
export const InputCheckbox: React.FC<CheckboxProps> = ({
  text,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <input onChange={onChange} checked={checked} type="checkbox" />
      <div className="text-textBlack">{text}</div>
    </div>
  );
};

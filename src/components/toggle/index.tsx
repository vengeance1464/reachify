// components/Toggle.js
import { useState } from "react";

type ToggleProps = {
  label: string;
  required?: boolean;
};
const Toggle: React.FC<ToggleProps> = ({ label, required }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <div
        className={`relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in`}
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isToggled}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </>
  );
};

export default Toggle;

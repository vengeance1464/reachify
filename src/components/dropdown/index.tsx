import React, { useEffect, useState } from "react";

type Element = {
  key: number;
  text: string;
};
type DropdownType = {
  items: Element[];
  defaultKey: number;
  name?: string;
};
const Dropdown: React.FC<DropdownType> = ({ items, defaultKey, name }) => {
  const [selectedOption, setSelectedOption] = useState(defaultKey ?? 0);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <select
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedOption}
        onChange={handleChange}
        name={name}
      >
        {items.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

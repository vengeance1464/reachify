import React, { useState } from "react";
import InputElement from "../inputElement";

const SpaceForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <InputElement label={"Space Name"} type={" text"} />
    </div>
  );
};

export default SpaceForm;

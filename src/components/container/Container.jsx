import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import "./container.css"

function Container({saveAgeNameHandler}) {

  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");

  const titleInputHandler = (event) => {
    const valueText = event.target.value;
    setTitle(valueText);
  };
  const ageInputHandler = (event) => {
    const valueAge = event.target.value;
    if (valueAge.charAt(0) !== "-") {
      setAge(valueAge);
    }
  };


  const save = (event) => {
    event.preventDefault();
      const saveInputValue = {
    title,
    age,
  };  
    saveAgeNameHandler(saveInputValue);
    setTitle("");
    setAge("");
  };

  return (
    <div>
      <div className="div-input-age-username">
        <Input
          labelName="Username"
          inputType="text"
          placeholder="..."
          value={title}
          onChange={titleInputHandler}
        />
        <Input
          labelName="Age (Year)"
          inputType="number"
          placeholder="AGE"
          value={age}
          onChange={ageInputHandler}
        />
      </div>
      <Button btnDisable={title==="" || age===""} valueText={"ADD"} onClick={save} />
    </div>
  );
}

export default Container;

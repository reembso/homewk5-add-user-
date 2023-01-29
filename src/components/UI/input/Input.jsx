import React from "react";
import "./Input.css";

function Input({labelName, inputType, placeHolder, onChange, ...rest}) {
  return (
    <div className="div-Input">
      <div>
        <label className="label">{labelName}</label>
      </div>
      <div>
        <input
        className="input"
        type={inputType}
          placeholder={placeHolder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
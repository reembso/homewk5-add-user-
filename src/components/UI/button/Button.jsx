import React from 'react'
import "./button.css"

function Button(props) {
  return (
    <button disabled={props.btnDisable} onClick={props.onClick}>{props.valueText}</button>
  )
}

export default Button
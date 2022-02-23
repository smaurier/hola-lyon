import React, { useRef } from "react";

function Input(props) {
  const {label, type, name, className, tabIndex, placeholder=label, onChange} = props

  if(type==="textarea"){
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          className={className}
          tabIndex={tabIndex}
          placeholder={placeholder}
          onChange={onChange}
        />
      </>
    )
  }
  else{
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className={className}
          tabIndex={tabIndex}
          placeholder={placeholder}
          onChange={onChange}
        />
      </>
    )
  }
}

export default Input;

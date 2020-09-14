import React from "react";
import "./input.scss";

const Input = ({
  id = '#',
  className = 'mb-1',
  type = 'text',
  autoFocus = false,
  autoComplete = 'on',
  label,
  required = false,
  error = '',
  ...props
}) => {

  const labelField = label ? <label htmlFor={id}>{label}</label> : null
  const inputClass = !!error ? `is--invalid` : className
  const errorMessage = !!error && <span className='error-message'>{error}</span>

  return (
    <div className={className}>
      {labelField}
      <input
        id={id}
        className={inputClass}
        type={type}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        required={required}
        {...props}
      />
      {errorMessage}
    </div>
  )
};

export default Input;

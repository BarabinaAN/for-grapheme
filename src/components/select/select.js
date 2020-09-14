import React from "react";

const Select = ({
  options,
  autoFocus = false,
  autoComplete = 'off',
  label,
  required = false,
  error = '',
  ...props
}) => {

  const renderOptions = (options) => {
    return options.map((item, indx) => {
      const {value, text} = item
      return <option key={indx} value={value}>{text}</option>
    })
  }
  
  const labelField = label ? <label>{label}</label> : null
  const optionsField = options && Array.isArray(options) ? renderOptions(options) : null
  const selectClass = !!error ? `is--invalid` : ''
  const errorMessage = !!error && <span className='error-message'>{error}</span>

  return (
    <div className='mb-1'>
      {labelField}
      <select {...props} className={selectClass}>
        {optionsField}
      </select>
      {errorMessage}
    </div>
  );
};

export default Select;

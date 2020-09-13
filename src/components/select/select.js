import React from "react";
import "./select.scss";

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
      if (indx === 0) {( <option key={indx} defaultValue value={value}>{text}</option> )}
      return <option key={indx} value={value}>{text}</option>
    })
  }

  const labelField = label ? <label>{label}</label> : null
  const optionsField = options && Array.isArray(options) ? renderOptions(options) : null

  return (
    <div className='mb-1'>
      {labelField}
      <select>
        {optionsField}
      </select>
    </div>
  );
};

export default Select;

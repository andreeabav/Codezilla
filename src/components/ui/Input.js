import React from 'react'
const Input = ({ type, id, label, value, onChange, placeholder, required }) => {
    return (
      <div className="inputWrapper">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  };
export default Input;
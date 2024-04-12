import React from 'react'
const Textarea = ({ id, label, value, onChange, placeholder, required }) => {
    return (
      <div className="textareaWrapper">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  };
export default Textarea;
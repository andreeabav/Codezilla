import React from 'react'
const Button = ({ children, classes, onClick }) => {
  const handleClick = () => {
    onClick();
  };
    return (
      <button className={`${classes} buttonStyle`} onClick={handleClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
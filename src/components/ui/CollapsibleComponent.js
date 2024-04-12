import React, { useState } from 'react';
const CollapsibleComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <div className={`collapsibleHeader ${isOpen && 'shadowForHeader'}`} onClick={toggleCollapsible}>
        {title}
        {isOpen ? (<div className="extendedSign">−</div>):(<div className="extendedSign">+</div>)}
      </div>
      {isOpen && <div className="collapsibleContent">{children}</div>}
    </div>
  );
};

export default CollapsibleComponent;
import React from "react";

const Btn = ({ text, children, btnStyle, onClick, type }) => {
  return (
    <button
      className={`rounded-[20px] ${btnStyle}`}
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Btn;

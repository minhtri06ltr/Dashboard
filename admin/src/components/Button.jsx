import React from "react";

const Button = ({
  text,
  bgColor,
  color,
  size,
  borderRadius,
  width,
}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius,
        width,
      }}
      className={`text-[${size}]   p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;

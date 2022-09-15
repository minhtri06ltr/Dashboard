import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-8">
      <div className="text-gray-400 text-center text-lg">
        <span>{category}</span>
      </div>
      <div className="text-center">
        <span className="text-3xl  font-extrabold tracking-tight text-slate-900">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Header;

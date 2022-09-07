import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <div className="text-gray-400 text-lg">
        <span>{category}</span>
      </div>
      <div>
        <span className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Header;

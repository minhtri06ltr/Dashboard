import React from "react";
import {
  Header,
  Stacked,
} from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Stacked"
        title="Inflation Rate in Percentage"
      />
      <div className="w-full">
        <Stacked />
      </div>
    </div>
  );
};

export default Line;

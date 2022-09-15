import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const changeColor = (value) => {
  document.getElementById(
    "preview",
  ).style.backgroundColor =
    value.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="m-2 dark:bg-[#33373E] md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        category="App"
        title="Color Picker"
      />
      <div className="text-center ">
        <div
          id="preview"
          className="sm:w-[592px] w-[400px] -translate-x-[15px] md:translate-x-0"
        />
        <div className="flex items-center gap-20  flex-wrap">
          <div className="flex-1">
            <span className="text-2xl block font-semibold mt-2 mb-4">
              Inline palette
            </span>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              change={changeColor}
              showButtons={false}
              inline
            ></ColorPickerComponent>
          </div>
          <div className="flex-1">
            <span className="text-2xl block font-semibold mt-2 mb-4">
              Inline Picker
            </span>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              change={changeColor}
              showButtons={false}
              inline
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

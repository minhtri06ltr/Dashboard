import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { theme, setTheme, setColor, setMode } =
    useStateContext();

  return (
    <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
      <div className="float-right dark:text-gray-200 h-screen dark:bg-secondary-dark-bg bg-white dark:[#4B4B52] fade-in-right w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <div>
            <span className="font-semibold text-xl">
              Settings
            </span>
          </div>
          <button
            type="button"
            style={{
              color: "rgb(153,171,180)",
              borderRadius: "50%",
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => {
              setTheme((pre) => ({
                ...pre,
                activeThemeSettings: false,
              }));
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <span className="block font-medium text-lg">
            Theme Options
          </span>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {
                setMode("Light");
              }}
              checked={theme.mode === "Light"}
            />
            <label
              htmlFor="light"
              className="ml-2 text-md cursor-pointer"
            >
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {
                setMode("Dark");
              }}
              checked={theme.mode === "Dark"}
            />
            <label
              htmlFor="dark"
              className="ml-2 text-md cursor-pointer"
            >
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <span className="block font-medium text-lg">
            Theme Colors
          </span>
          <div className="flex gap-2 ">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                position="TopCenter"
                content={item.name}
              >
                <div className="relative mt-2 cursor-pointer flex items-center gap-5">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    type="button"
                    style={{
                      backgroundColor: item.color,
                    }}
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color ===
                        theme.currentColor
                          ? "block"
                          : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;

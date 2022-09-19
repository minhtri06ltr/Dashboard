import React, {
  createContext,
  useContext,
  useState,
} from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] =
    useState(true);
  const [isClicked, setIsClicked] =
    useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
  };
  const [theme, setTheme] = useState({
    currentColor: localStorage.getItem(
      "themeColor",
    )
      ? localStorage.getItem("themeColor")
      : "#03C9D7",
    mode: localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "Dark",
    activeThemeSettings: false,
  });

  const setMode = (mode) => {
    setTheme((pre) => {
      return {
        ...pre,
        mode: mode,
        activeThemeSettings: false,
      };
    });
    localStorage.setItem("themeMode", mode);
  };
  const setColor = (color) => {
    setTheme((pre) => {
      return {
        ...pre,
        currentColor: color,
        activeThemeSettings: false,
      };
    });
    localStorage.setItem("themeColor", color);
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        setColor,
        setMode,

        theme,
        setTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext);

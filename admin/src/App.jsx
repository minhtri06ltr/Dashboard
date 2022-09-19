import "./App.css";

import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "./components";
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  Line,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    activeMenu,
    setActiveMenu,
    theme,
    setTheme,
  } = useStateContext();
  console.log(activeMenu);
  return (
    <div
      className={
        theme.mode === "Dark" ? "dark" : ""
      }
    >
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/*Setting button */}
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          >
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => {
                  setTheme((pre) => ({
                    ...pre,
                    activeThemeSettings: true,
                  }));
                  setActiveMenu(false);
                }}
                style={{
                  background: theme.currentColor,
                  borderRadius: "50%",
                }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/*Sidebar */}
          {
            <div
              className={`w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ${
                activeMenu ? "block" : "hidden"
              }`}
            >
              <Sidebar />
            </div>
          }
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {theme.activeThemeSettings && (
                <ThemeSettings />
              )}
              <Routes>
                {/*Dashboard */}
                <Route
                  path="/"
                  element={<ECommerce />}
                />
                <Route
                  path="/ecommerce"
                  element={<ECommerce />}
                />
                {/*Pages */}
                <Route
                  path="/orders"
                  element={<Orders />}
                />
                <Route
                  path="/employees"
                  element={<Employees />}
                />
                <Route
                  path="/customers"
                  element={<Customers />}
                />
                {/*Apps */}
                <Route
                  path="/kanban"
                  element={<Kanban />}
                />
                <Route
                  path="/editor"
                  element={<Editor />}
                />
                <Route
                  path="/calendar"
                  element={<Calendar />}
                />
                <Route
                  path="/color-picker"
                  element={<ColorPicker />}
                />
                {/*Charts */}
                <Route
                  path="/line"
                  element={<Line />}
                />
                <Route
                  path="/area"
                  element={<Area />}
                />
                <Route
                  path="/bar"
                  element={<Bar />}
                />
                <Route
                  path="/pie"
                  element={<Pie />}
                />
                <Route
                  path="/financial"
                  element={<Financial />}
                />
                <Route
                  path="/color-mapping"
                  element={<ColorMapping />}
                />
                <Route
                  path="/pyramid"
                  element={<Pyramid />}
                />
                <Route
                  path="/stacked"
                  element={<Stacked />}
                />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

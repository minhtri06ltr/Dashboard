import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } =
    useStateContext();

  return (
    <div className=" ml-3  h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      <div className="  flex justify-between items-center">
        <Link
          to="/"
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          onClick={() => setActiveMenu(false)}
        >
          <SiShopware /> <span>Hoshiyomi</span>
        </Link>

        <TooltipComponent
          content="Close"
          position="BottomCenter"
        >
          <button
            type="button"
            onClick={() =>
              setActiveMenu((pre) => !pre)
            }
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10 ">
        {links.map((item) => (
          <div key={item.title}>
            <span className="m-3 text-gray-400 mt-4 uppercase">
              {item.title}
            </span>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={() => {
                  setActiveMenu(false);
                }}
                className={({ isActive }) =>
                  `flex m-2 items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md ${
                    isActive
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
                  }`
                }
              >
                {link.icon}
                <span className="capitalize">
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

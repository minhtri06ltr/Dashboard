import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import {
  Cart,
  Chat,
  Notification,
  UserProfile,
} from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({
  title,
  func,
  icon,
  color,
  dotColor,
}) => {
  return (
    <TooltipComponent
      content={title}
      position="BottomCenter"
      className={`${
        title == "Menu" && "md:hidden"
      }`}
    >
      <button
        type="button"
        style={{ color }}
        onClick={func}
        className="relative  rounded-full text-xl p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute rounded-full inline-flex h-5 w-5 right-2 top-2"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};
const Navbar = () => {
  const { activeMenu, setActiveMenu } =
    useStateContext();
  return (
    <div className=" flex justify-between items-center py-2 px-4 md:mx-6 relative">
      <NavButton
        color="blue"
        icon={<AiOutlineMenu />}
        title="Menu"
        func={() => {
          setActiveMenu((pre) => !pre);
        }}
      />
      <div className="flex">
        <NavButton
          color="blue"
          icon={<FiShoppingCart />}
          title="Cart"
          func={() => {
            setActiveMenu((pre) => !pre);
          }}
        />
        <NavButton
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
          title="Chat"
          func={() => {
            setActiveMenu((pre) => !pre);
          }}
        />
        <NavButton
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotificationLine />}
          title="Notification"
          func={() => {
            setActiveMenu((pre) => !pre);
          }}
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {}}
          >
            <img
              src={avatar}
              className="rounded-full w-8 h-8"
            />
            <div>
              <span className=" text-14 text-gray-400">
                Hi,{" "}
              </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </div>
            <MdKeyboardArrowDown className=" text-14 text-gray-400" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;

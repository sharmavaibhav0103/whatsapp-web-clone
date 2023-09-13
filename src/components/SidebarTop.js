import React from "react";
import Community from "./svgs/Community";
import NoStatus from "./svgs/NoStatus";
import AddChat from "./svgs/AddChat";
import MenuIcon from "./svgs/MenuIcon";
import { useAtom } from "jotai";
import { showProfileBar } from "./store";

function SidebarTop() {
  const [t, setT] = useAtom(showProfileBar);

  const toggleProfileBar = () => {
    setT(true);
  };
  return (
    <div className="sidebar-top pl-4 py-2 flex items-center justify-between">
      <div className="flex-1">
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/364077771_260540210103725_2119185399597368042_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQQvm1traOZuUaLXeeMPal8Jh7VIjnBsP5EyFQYjsw1kg&oe=650B0180&_nc_sid=000000&_nc_cat=105"
          alt=""
          className="profile-img rounded-full cursor-pointer"
          onClick={() => toggleProfileBar()}
        />
      </div>
      <div className="icons flex flex-1 content-end mr-2 borde justify-around">
        <Community />
        <NoStatus />
        <AddChat />
        <MenuIcon />
      </div>
    </div>
  );
}

export default SidebarTop;

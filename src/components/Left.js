import React from "react";
import SidebarTop from "./SidebarTop";
import ChatList from "./ChatList";
import ProfileBar from "./ProfileBar";
import { useAtom } from "jotai";
import { showProfileBar } from "./store";

function Left() {
  const [t, setT] = useAtom(showProfileBar);

  return (
    <div className="sidebar h-full">
      <SidebarTop />
      <ChatList />
      {t ? <ProfileBar /> : ""}
    </div>
  );
}

export default Left;

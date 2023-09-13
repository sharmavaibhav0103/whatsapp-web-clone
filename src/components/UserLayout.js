import React from "react";
import Left from "./Left";
import Right from "./Right";

function UserLayout() {
  return (
    <div className="user-layout w-screen h-screen px-5 py-5">
      <div className="lr-container flex h-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default UserLayout;

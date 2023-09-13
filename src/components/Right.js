import React from "react";
import r from "../assets/r.png";
import Lock from "./svgs/Lock";

function Right() {
  return (
    <div className="right flex-1 bg-gray-700 text-white h-full flex justify-center items-center">
      <div className="x flex flex-col justify-center items-center">
        <img src={r} alt="img" className="r-img" />
        <p className="dwnld-txt">Download Whatsapp for Windows</p>
        <p className="r-txt text-gray-400">
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </p>
        <button className="get-app-btn">
          <a
            href="https://apps.microsoft.com/store/detail/whatsapp/9NKSQGP7F2NH"
            target="_blank"
          >
            Get the app
          </a>
        </button>
      </div>
      <div className="right-bottom flex items-center justify-around">
        <Lock />
        <p className="lock-txt ml-1">End-to-end encrypted</p>
      </div>
    </div>
  );
}

export default Right;

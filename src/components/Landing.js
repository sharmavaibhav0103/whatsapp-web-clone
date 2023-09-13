import React from "react";
import GoogleSignUpButton from "./GoogleAuth";
import Logo from "./svgs/Logo";

export default function Landing() {
  return (
    <div className="landing-main bg-red w-screen h-screen">
      <div className="landing-header-bg">
        <div className="landing-wrapper bord flex flex-col">
          <div className="landing-wrapper-e1 flex justify-center items-center py-7">
            <span className="logo">
              <Logo />
            </span>
            <span className="title-txt pl-2 text-white">WHATSAPP WEB</span>
          </div>
          <div className="landing-wrapper-e2 bg-white w-1/2 flex justify-center items-center">
            <GoogleSignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
}

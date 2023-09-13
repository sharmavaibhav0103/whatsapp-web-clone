import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "./store";
import { showProfileBar } from "./store";
import ArrowLeft from "./svgs/ArrowLeft";
import Pencil from "./svgs/Pencil";
import Camera from "./svgs/Camera";

function ProfileBar() {
  const [u, setU] = useAtom(userAtom);
  const [t, setT] = useAtom(showProfileBar);

  const toggleProfileBar = () => {
    setT(false);
    // console.log("Clicked");
  };

  return (
    <div className="edit-profile">
      <div className="eph flex items-center">
        <div
          className="al pl-7 cursor-pointer borde"
          onClick={() => toggleProfileBar()}
        >
          <ArrowLeft />
        </div>
        <p className="epg-txt pl-7">Profile</p>
      </div>
      <div className="borde flex justify-center items-center py-7 rounded-ful">
        <div className="p-img-div borde">
          {u ? (
            <img
              src={u.photoURL}
              alt=""
              className="rounded-full"
              width={200}
              height={200}
            />
          ) : (
            <p>No Photo</p>
          )}
          <div className="psio rounded-full flex justify-center items-center">
            <div className="borde text-center flex flex-col justify-center items-center">
              <Camera />
              <p className="cpp-txt text-sm pt-1">
                CHANGE <br />
                PROFILE PHOTO
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="epns px-7 pt-7">
        <p className="text-green-700">Your Name</p>
        <div className="flex w-full justify-between items-center">
          <input type="text" value={u.displayName} className="epsib pt-5" />
          <div className="cursor-pointer">
            <Pencil />
          </div>
        </div>
      </div>

      <div>
        <p className="npt px-5 py-7">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
      </div>

      <div className="epsas px-5">
        <p className="text-green-700 pb-4">About</p>
        <div className="flex w-full justify-between items-center">
          <p>Available</p>
          <div className="cursor-pointer">
            <Pencil />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;

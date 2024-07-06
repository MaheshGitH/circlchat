import React from "react";
import LeftSide from "./components/leftside/LeftSide";
import { HiMenuAlt1 } from "react-icons/hi";

const page = async () => {
  return (
    <div className="flex h-dvh w-screen">
      <input id="hide" type="checkbox" className="hidden peer" />
      <label
        className="absolute max-md:hidden cursor-pointer mt-4 ml-4"
        htmlFor="hide"
      >
        <HiMenuAlt1 className="size-10" />
      </label>
      <div className="peer-checked:md:hidden md:max-w-96 flex-grow">
        <LeftSide></LeftSide>
      </div>
      <div className="bg-slate-700 md:flex-grow"></div>
    </div>
  );
};

export default page;

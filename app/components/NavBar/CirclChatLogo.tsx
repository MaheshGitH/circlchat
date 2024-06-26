import React from "react";
import { Oranienbaum } from "next/font/google";
import Logo from "../Logo";

const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });

const CirclChatLogol = () => {
  return (
    <div className="bg-transparent flex items-center">
      <span className="size-20 lg:size-24 fill-black dark:fill-white flex justify-center">
        <Logo></Logo>
      </span>
      <h1
        className={
          oranienbaum.className +
          " dark:text-white text-black text-[22px] lg:text-[26px]"
        }
      >
        circlchat
      </h1>
    </div>
  );
};

export default CirclChatLogol;

import React from "react";
import { Oranienbaum } from "next/font/google";
import Logo from "../Logo";

const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });

const CirclChatLogol = () => {
  return (
    <div className="bg-transparent flex items-center">
      <Logo></Logo>
      <h1
        className={
          oranienbaum.className + " dark:text-white text-black text-[22px]"
        }
      >
        circlchat
      </h1>
    </div>
  );
};

export default CirclChatLogol;

import React from "react";
import { Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });

const CirclChatLogol = () => {
  return (
    <div className="bg-transparent flex items-center">
      <img className="size-20" src="/circlchat logo.svg" alt="" />
      <h1 className={oranienbaum.className + " text text-black text-[22px]"}>
        circlchat
      </h1>
    </div>
  );
};

export default CirclChatLogol;

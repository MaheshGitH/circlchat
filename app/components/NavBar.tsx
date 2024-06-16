import React from "react";
import CirclChatLogo from "./NavBar/CirclChatLogo";
import LogIn from "./NavBar/LogIn";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full max-w-[1700px] p-0 lg:pt-5 transition-[padding] ">
      <CirclChatLogo />

      <LogIn></LogIn>
    </nav>
  );
};

export default NavBar;

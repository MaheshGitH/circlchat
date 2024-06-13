import React from "react";
import CirclChatLogo from "./NavBar/CirclChatLogo";
import LogIn from "./NavBar/LogIn";

const NavBar = () => {
  return (
    <nav className="flex bg-white justify-between">
      <CirclChatLogo />

      <LogIn></LogIn>
    </nav>
  );
};

export default NavBar;

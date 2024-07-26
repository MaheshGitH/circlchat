import React from "react";
import CirclChatLogo from "./NavBar/CirclChatLogo";
import LogIn from "./NavBar/LogIn";
import { auth } from "@/auth";
import LogOut from "./NavBar/LogOut";

const NavBar = async () => {
  const session = await auth();
  return (
    <nav className="flex justify-between w-full max-w-[1700px] p-0 lg:pt-5 transition-[padding] ">
      <CirclChatLogo />
      {session ? <LogOut /> : <LogIn />}
    </nav>
  );
};

export default NavBar;

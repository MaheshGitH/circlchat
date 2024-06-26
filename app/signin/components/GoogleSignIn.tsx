import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  return (
    <button className="text-black w-72 flex items-center gap-10 px-5 py-2 pr-10 border-black border-[1px] rounded-md bg-white m-4">
      {" "}
      <FcGoogle className="size-9" /> Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
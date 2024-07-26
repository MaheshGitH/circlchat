"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogOut = () => {
  return (
    <span className="flex items-center pr-4">
      <button
        onClick={() => signOut()}
        className="bg-primary duration-150 lg:hover:bg-purple-700 px-9 py-2 rounded text-white"
      >
        SignOut
      </button>
    </span>
  );
};

export default LogOut;

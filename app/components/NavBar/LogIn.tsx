"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LogIn = () => {
  return (
    <span className="flex items-center pr-4">
      <button
        onClick={() => signIn()}
        className="bg-primary duration-150 lg:hover:bg-purple-700 px-9 py-2 rounded text-white"
      >
        Login
      </button>
    </span>
  );
};

export default LogIn;

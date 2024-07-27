"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { PiNotePencil } from "react-icons/pi";

const PencilIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative inline-block my-auto text-center">
      <button onClick={handleClick} className="focus:outline-none">
        <PiNotePencil className="size-6" />
      </button>
      {showTooltip && (
        <>
          <div onClick={handleClick} className="fixed inset-0"></div>
          <button
            className="absolute -top-10 -left-3 border py-1 px-6 rounded bg-white dark:bg-black text-red-500"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default PencilIcon;

import React, { ReactNode } from "react";

const BackGround = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-gradient-to-br from-[#9757ff] to-[#05142B]">
      <div className="absolute rounded-md bg-white flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackGround;

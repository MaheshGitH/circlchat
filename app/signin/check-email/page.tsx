import React from "react";
import BackGround from "../components/BackGround";
import { MdOutlineMail } from "react-icons/md";

const page = () => {
  return (
    <BackGround>
      <div className=" flex items-center justify-between py-2 px-6">
        <p className=" font-extrabold text-lg">
          &nbsp;check &nbsp; you'r &nbsp; email&nbsp; 👉&nbsp;&nbsp;
        </p>
        <MdOutlineMail className="text-black size-8" />
      </div>
    </BackGround>
  );
};

export default page;

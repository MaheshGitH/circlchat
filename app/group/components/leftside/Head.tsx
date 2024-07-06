import { MdOutlineMail } from "react-icons/md";
import Logo from "@/app/components/Logo";
import React from "react";
import GroupThread from "./GroupThread";

const Head = () => {
  return (
    <section className="mb-2">
      <div className="flex justify-between">
        <span className="size-20 flex ml-5 md:ml-36 duration-200">
          <Logo />
        </span>
        <span className="flex items-center">
          <MdOutlineMail className="text-black size-8 mr-8" />
        </span>
      </div>
      <GroupThread />
    </section>
  );
};

export default Head;

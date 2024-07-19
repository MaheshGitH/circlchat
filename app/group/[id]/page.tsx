import React from "react";
import LeftSide from "../leftside/LeftSide";
import { HiMenuAlt1 } from "react-icons/hi";
import GroupInstance from "./rightside/GroupInstance";

interface Props {
  params: { id: string | undefined };
}

const page = async ({ params }: Props) => {
  const groupId = params.id;

  return (
    <div className="flex h-dvh w-screen">
      <input id="hide" type="checkbox" className="hidden peer" />
      <label
        className="absolute max-md:hidden cursor-pointer mt-4 ml-4"
        htmlFor="hide"
      >
        <HiMenuAlt1 className="size-10" />
      </label>
      <div
        className={`peer-checked:md:hidden md:max-w-96 flex-grow ${
          groupId ? " max-md:hidden " : " block "
        }`}
      >
        <LeftSide></LeftSide>
      </div>
      <div
        className={`md:flex-grow ${groupId ? " flex-grow " : " max-md:hidden"}`}
      >
        <GroupInstance groupId={groupId as string}></GroupInstance>
      </div>
    </div>
  );
};

export default page;

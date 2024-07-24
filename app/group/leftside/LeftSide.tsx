import React from "react";
import Head from "./Head";
import Group from "./Group";
import Profile from "./Profile";
import AddGroup from "./AddGroup";

const LeftSide = () => {
  return (
    <div className="flex md:w-96 h-full flex-col border-r-[1px] border-black">
      <Head></Head>
      <div className="flex-grow">
        <Group></Group>
      </div>
      <div className="flex justify-between items-center p-4">
        <Profile></Profile>
        <AddGroup></AddGroup>
      </div>
    </div>
  );
};

export default LeftSide;

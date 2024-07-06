import React from "react";
import Head from "./Head";
import Group from "./Group";
import Profile from "./Profile";

const LeftSide = () => {
  return (
    <div className="flex h-full flex-col">
      <Head></Head>
      <div className="flex-grow">
        <Group></Group>
      </div>
      <div className="flex justify-between items-center p-4">
        <Profile></Profile>
        <span className="bg-primary rounded-full text-white size-10 text-center leading-10 text-2xl">
          +
        </span>
      </div>
    </div>
  );
};

export default LeftSide;

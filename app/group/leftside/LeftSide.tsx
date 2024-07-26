import React from "react";
import Head from "./Head";
import Group from "./Group";
import Profile from "./Profile";
import AddGroup from "./AddGroup";
import { auth } from "@/auth";

const LeftSide = async () => {
  const session = await auth();
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
  return (
    <div className="flex md:w-96 h-full flex-col border-r-[1px] border-black">
      <Head></Head>
      <div className="flex-grow">
        <Group></Group>
      </div>
      <div className="flex justify-between items-center p-4">
        <Profile></Profile>
        <AddGroup userID={user?.user_id!}></AddGroup>
      </div>
    </div>
  );
};

export default LeftSide;

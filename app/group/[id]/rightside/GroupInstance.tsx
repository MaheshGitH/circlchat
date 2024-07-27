import React from "react";
import GroupProfile from "./GroupProfile";
import TypeMessage from "./TypeMessage";
import Conversation from "./Conversation";
import prisma from "@/prisma/prismaClient";
import { auth } from "@/auth";

interface Props {
  groupId: string;
}

const GroupInstance = async ({ groupId }: Props) => {
  if (!groupId) return;

  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  const group = await prisma?.group.findUnique({
    where: {
      id: groupId,
    },
  });

  return (
    <div className="flex flex-col justify-between h-dvh">
      <div className="h-20 flex-shrink-0 border-b-[1px] border-black dark:border-white/80">
        <GroupProfile
          groupId={groupId}
          profileName={group?.groupName as string}
        />
      </div>
      <div className="flex-grow overflow-y-auto overflow-x-hidden">
        <Conversation userId={user?.user_id as string} groupId={groupId} />
      </div>
      <div className="h-20 flex-shrink-0 shadowTop">
        <TypeMessage
          userId={user?.user_id as string}
          groupId={groupId}
          userName={user?.name}
        />
      </div>
    </div>
  );
};

export default GroupInstance;

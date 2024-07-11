import React from "react";
import GroupProfile from "./GroupProfile";
import TypeMessage from "./TypeMessage";
import Conversation from "./Conversation";

interface Props {
  groupId: string;
}

const GroupInstance = async ({ groupId }: Props) => {
  if (!groupId) return;
  const group = await prisma?.group.findUnique({
    where: {
      id: groupId,
    },
  });

  return (
    <div className="flex flex-col justify-between h-dvh">
      <div className="h-20 flex-shrink-0 border-b-[1px] border-black">
        <GroupProfile
          groupId={groupId}
          profileName={group?.groupName as string}
        />
      </div>
      <div className="flex-grow overflow-auto">
        <Conversation />
      </div>
      <div className="h-20 flex-shrink-0 shadowTop">
        <TypeMessage />
      </div>
    </div>
  );
};

export default GroupInstance;

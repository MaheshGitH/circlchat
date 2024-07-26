import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import AddPeople from "./AddPeople";
import { auth } from "@/auth";

interface Props {
  profileName: string;
  groupId: string;
}

const GroupProfile = async ({ profileName, groupId }: Props) => {
  const session = await auth();
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  return (
    <div className="flex items-center h-full p-1">
      <Link href="/group" className="text-2xl flex-shrink-0">
        <IoCaretBackOutline className="size-10" />
      </Link>
      <div className="flex-grow gap-2 flex items-center h-full">
        <span className="size-16 overflow-hidden rounded-full flex">
          <Image
            style={{ objectFit: "cover" }}
            src="/google-logo.jpg"
            height={64}
            width={64}
            alt="next image"
            placeholder="blur"
            blurDataURL={"/google-logo.jpg"}
          />
        </span>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{profileName}</h1>
          <p className="overflow-hidden text-nowrap text-ellipsis w-56">
            Should not talk about other than Windows
          </p>
        </div>
      </div>
      <div className="w-10 h-full content-center flex-shrink-0 relative">
        <AddPeople
          userId={user?.user_id as string}
          profileName={profileName}
          groupId={groupId}
        ></AddPeople>
      </div>
    </div>
  );
};

export default GroupProfile;

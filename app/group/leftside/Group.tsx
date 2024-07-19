import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Group = async () => {
  const session = await auth();
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  return user?.groups.map((group) => (
    <Link
      key={group.groupId}
      href={`/group/${group.groupId}`}
      className="bg-white border-b-[1px] border-black  mb-1 flex py-3 pl-5 pr-2 max-w-[760px] cursor-pointer"
    >
      <span className="size-16 overflow-hidden rounded-full flex justify-center">
        <Image
          style={{ objectFit: "cover" }}
          src="/bugatti-veyron.jpg"
          height={64}
          width={64}
          alt="next image"
        />
      </span>
      <div className="ml-5 mt-px flex-1">
        <span className="flex justify-between items-center mb-2 w-full">
          <h4 className="text-xl font-bold text-black">{group.groupName}</h4>
          <p className="text-xs mb-1 primary">2 hr ago</p>
        </span>
        <span className="flex justify-between">
          <p className="text-black overflow-hidden text-nowrap text-ellipsis max-w-60">
            Alok: new task to comp
          </p>
          <p className="size-6 text-[14px] rounded-full bg-primary leading-6 text-white text-center inline-block">
            10
          </p>
        </span>
      </div>
    </Link>
  ));
};

export default Group;

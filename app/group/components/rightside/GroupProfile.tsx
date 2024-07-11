import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupProfile = () => {
  return (
    <div className="flex items-center h-full p-1">
      <Link href="/group" className="text-2xl flex-shrink-0">
        <IoCaretBackOutline className="size-10" />
      </Link>
      <div className="flex-grow gap-2 flex items-center h-full">
        <span className="size-16 overflow-hidden rounded-full flex">
          <Image
            priority
            style={{ objectFit: "cover" }}
            src="/google-logo.jpg"
            height={64}
            width={64}
            alt="next image"
          />
        </span>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Windows</h1>
          <p className="overflow-hidden text-nowrap text-ellipsis w-56">
            Should not talk about other than Windows
          </p>
        </div>
      </div>
      <div className="w-10 h-full content-center flex-shrink-0">
        <BsThreeDotsVertical className="size-8" />
      </div>
    </div>
  );
};

export default GroupProfile;

import React from "react";
import Continue from "./Continue";
import { MdPerson } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi2";
import Note from "./Note";
import Image from "next/image";
import updateNewUser from "@/server-actions/updateNewUser";
import { auth } from "@/auth";

const UserDetail = async () => {
  const session = await auth();

  return (
    <form className=" flex flex-col gap-6" action={updateNewUser}>
      <div className="flex justify-center w-full mb-5">
        <span className="size-24 rounded-full overflow-hidden">
          <Image
            src={session?.user?.image as string}
            width={96}
            height={96}
            alt="profile picture"
          />
        </span>
      </div>
      <div className="flex flex-col">
        <label
          className="text-black cursor-pointer inline-block w-20"
          htmlFor="username"
        >
          Username
        </label>
        <span className="bg-white border-b text-black border-black w-72 px-3 py-2 flex items-center">
          <MdPerson className="size-6" />

          <input
            className="bg-transparent focus:outline-none px-3"
            type="text"
            id="username"
            name="username"
            placeholder="username"
          />
        </span>
      </div>
      <div className="flex flex-col">
        <label
          className="text-black cursor-pointer inline-block w-20"
          htmlFor="userid"
        >
          UserID
        </label>
        <span className="bg-white border-b text-black border-black w-72 px-3 py-2 flex">
          <HiAtSymbol className="size-5" />
          <input
            className="bg-transparent focus:outline-none px-3"
            type="text"
            id="userid"
            name="userid"
            placeholder="userId"
          />
        </span>
      </div>
      <Note />
      <Continue />
    </form>
  );
};

export default UserDetail;

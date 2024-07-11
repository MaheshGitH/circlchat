import React from "react";
import { BsSendFill } from "react-icons/bs";
import { RiGhostSmileLine } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";

const TypeMessage = () => {
  return (
    <div className="flex h-full p-2">
      <div className="flex-shrink-0 w-14">
        <RiGhostSmileLine className="size-8 m-auto h-full" />
      </div>
      <div className="flex-grow flex items-center">
        <form className="flex border-2 border-black rounded-full flex-grow">
          <input
            placeholder="Type a message"
            type="text"
            className="flex-grow bg-transparent border-none rounded-full border-2 focus:outline-none pl-3 py-2"
          />
          <button className=" flex-shrink-0 mr-3 ml-1" type="submit">
            <BsSendFill className=" size-5" />
          </button>
        </form>
      </div>
      <div className="flex-shrink-0 w-14">
        <MdAttachFile className="size-8 m-auto h-full" />
      </div>
    </div>
  );
};

export default TypeMessage;

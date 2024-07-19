"use client";

import { socket } from "@/app/socket";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Conversation {
  userName: string;
  userProfile?: string | null;
  content: string;
  createdAt?: Date;
}

const Conversation = () => {
  const [messages, setMessages] = useState<Conversation[]>([]);
  const bottomScrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomScrollRef.current?.scrollIntoView();
  };

  useEffect(() => {
    socket.on("recieve", (message: Conversation, groupID) => {
      scrollToBottom();
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("recieve");
    };
  }, []);

  return (
    <ul className="mb-2">
      {messages.map((msg, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 w-10/12 lg:w-1/2 max-w-[750px] px-2 py-1 2xl:max-w-[800px] rounded border-2"
        >
          <div className="gap-2 flex items-center">
            <span className="size-7 overflow-hidden rounded-full flex">
              <Image
                style={{ objectFit: "cover" }}
                src="/bugatti-veyron.jpg"
                height={28}
                width={28}
                alt="next image"
              />
            </span>
            <p className="font-semibold">{msg.userName}</p>
            <p className="text-xs ml-auto">moment ago</p>
          </div>
          <p>{msg.content}</p>
        </li>
      ))}
      <div className="" ref={bottomScrollRef}></div>
    </ul>
  );
};

export default Conversation;

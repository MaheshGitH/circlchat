"use client";

import { socket } from "@/app/socket";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import getLastMessage from "@/server-actions/getLastMessage";

interface Conversation {
  _id: string;
  userName: string;
  userId: string;
  userProfile?: string | null;
  content: string;
  createdAt?: Date;
}

const Conversation = ({
  groupId,
  userId,
}: {
  groupId: string;
  userId: string;
}) => {
  const [messages, setMessages] = useState<Conversation[]>([]);
  const [increment, setIncrement] = useState(0);
  const [lastMsg, setLastMsg] = useState(false);

  const listRef = useRef<HTMLLIElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToBottom = () => {
    const lastChild = listRef.current?.lastElementChild;

    lastChild?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    formRef.current?.requestSubmit();

    setMessages((prev) => [...prev]);

    socket.on("recieve", (message: Conversation) => {
      scrollToBottom();
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("recieve");
    };
  }, []);

  return (
    <>
      <form
        className="flex justify-center"
        ref={formRef}
        action={(formData) => {
          getLastMessage(formData).then((res: Conversation[]) => {
            if (res.length < 10) setLastMsg(true);
            setMessages((prev) => {
              const final: Conversation[] = [];

              res.forEach((itemA) => {
                if (!prev.some((itemB) => itemA._id === itemB._id)) {
                  final.push(itemA);
                }
              });
              final.reverse();

              return [...final, ...prev];
            });
          });
        }}
      >
        <input
          className="hidden"
          name="gId"
          defaultValue={groupId}
          type="text"
        />
        <input
          className="hidden"
          name="sCount"
          value={increment.toString()}
          type="text"
          readOnly
        />
        <button
          className=" border-gray-200 border py-1 px-8 rounded text-[14px]"
          disabled={lastMsg}
          onClick={() => {
            setIncrement((prev) => prev + 1);
          }}
        >
          {lastMsg ? "You've reached top" : "load more"}
        </button>
      </form>
      <ul className="mb-2 flex flex-col">
        {messages.map((msg, index) => (
          <li
            ref={listRef}
            key={index}
            className={`flex flex-col gap-2 w-10/12 lg:w-1/2 max-w-[750px] px-2 py-1 2xl:max-w-[800px] rounded border-2 relative chat-bubble text-black  ${
              msg.userId == userId ? " mr-3 self-end receiver" : " ml-3 sender "
            }`}
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
              <p className="font-semibold">
                {msg.userId == userId ? "You" : msg.userName}
              </p>
              <p className="text-xs ml-auto">
                {msg.createdAt
                  ? new Date(msg.createdAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "numeric",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })
                  : "moment ago"}
              </p>
            </div>
            <p className="overflow-hidden break-words">{msg.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Conversation;

"use client";

import acceptReject from "@/server-actions/acceptReject";
import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
interface Invitation {
  PWS: string;
  groupName: string;
  groupId: string;
  image: string | null;
}

interface Props {
  userId: string;
  invitationNum: number | "99+";
  group?: Invitation[];
}

const Mail = ({ userId, invitationNum, group }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <span className="flex items-center relative">
        <MdOutlineMail
          onClick={openModal}
          className="cursor-pointer text-black size-8 mr-8"
        />
        <p className="size-6 absolute top-3 right-5  text-[14px] rounded-full bg-primary leading-6 text-white text-center inline-block">
          {invitationNum}
        </p>
      </span>
      <dialog
        className="rounded focus:outline-none relative overflow-x-hidden overflow-y-scroll"
        ref={dialogRef}
      >
        <button
          className="absolute top-0 right-0 px-4 py-2 border-2 rounded-full rotate-45"
          onClick={closeModal}
        >
          +
        </button>
        {group &&
          group.map((inv, index) => (
            <form
              key={index}
              action={(formData: FormData) => {
                const groupId = inv.groupId;
                const groupName = inv.groupName;
                acceptReject({ formData, userId, groupId, groupName });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
              className="flex flex-col gap-14 items-center p-10"
            >
              <div className=" flex flex-col items-center gap-3">
                <span className="size-16 overflow-hidden rounded-full flex justify-center">
                  <Image
                    style={{ objectFit: "cover" }}
                    src="/bugatti-veyron.jpg"
                    height={64}
                    width={64}
                    alt="next image"
                  />
                </span>
                <p className="font-extrabold text-xl">{inv.groupName}</p>
              </div>
              <p className="">
                <span className="font-extrabold mr-1">{inv.PWS}</span>
                is inviting you to
                <span className="font-extrabold ml-1">{inv.groupName}</span>
              </p>
              <div className="flex gap-4">
                <button
                  className="border py-2 px-10 rounded primary border-primary"
                  onClick={closeModal}
                  name="action"
                  value="Reject"
                >
                  Reject
                </button>
                <button
                  className="border py-2 px-10 rounded bg-primary text-white"
                  onClick={closeModal}
                  name="action"
                  value="Accept"
                >
                  Accept
                </button>
              </div>
            </form>
          ))}
      </dialog>
    </>
  );
};

export default Mail;

"use client";

import acceptReject from "@/server-actions/acceptReject";
import React, { useRef, useState } from "react";
import { MdOutlineMail } from "react-icons/md";

interface Props {
  userId: string;
  invitationNum: number | "99+";
  group?: Invitation[];
}

interface Invitation {
  PWS: string;
  groupName: string;
  groupId: string;
  image: string | null;
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
      <dialog className="rounded focus:outline-none" ref={dialogRef}>
        {group &&
          group.map((g) => (
            <form
              action={(formData: FormData) => {
                const groupId = g.groupId;
                const groupName = g.groupName;
                acceptReject({ formData, userId, groupId, groupName });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
              className="flex flex-col gap-14 items-center p-10"
            >
              <button onClick={closeModal} name="action" value="Reject">
                Reject
              </button>
              <button onClick={closeModal} name="action" value="Accept">
                Accept
              </button>
              <button onClick={closeModal}>Close</button>
            </form>
          ))}
      </dialog>
    </>
  );
};

export default Mail;

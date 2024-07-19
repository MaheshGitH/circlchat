"use client";

import createGroup from "@/server-actions/createGroup";
import React, { useRef } from "react";
import Image from "next/image";

const AddGroup = () => {
  const formRef = useRef<HTMLFormElement>(null);
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

  const closeMAndSubmit = () => {
    if (dialogRef.current && formRef.current) {
      formRef.current.requestSubmit();
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="rounded-full text-white bg-primary size-10 text-center leading-10 text-2xl"
      >
        +
      </button>

      <dialog className="rounded focus:outline-none" ref={dialogRef}>
        <form
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          ref={formRef}
          className="flex flex-col gap-14 items-center p-10"
          action={createGroup}
        >
          <span className="size-16 overflow-hidden rounded-full flex justify-center">
            <Image
              priority
              style={{ objectFit: "cover" }}
              src="/google-logo.jpg"
              height={64}
              width={64}
              alt="next image"
            />
          </span>
          <div className="flex flex-col gap-2 relative">
            <input
              name="groupName"
              placeholder=" "
              className="outline-none border-b-2 z-50 border-black px-2 py-1 bg-transparent peer"
              type="text"
            />
            <span className="absolute -z-40 mx-2 mb-2 left-0 text-gray-500 duration-200 peer-focus:-top-6 peer-focus:-left-1 peer-focus:text-black peer-focus:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base">
              Group Name
            </span>
          </div>
        </form>
        <div className="flex gap-10 justify-center my-5">
          <button onClick={closeModal} className="primary px-6 py-2 rounded">
            Close
          </button>
          <button
            onClick={closeMAndSubmit}
            className="bg-primary text-white py-2 px-6 rounded"
            type="submit"
          >
            Create
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AddGroup;

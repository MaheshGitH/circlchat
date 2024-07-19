"use client";
import React, { useRef, useState } from "react";
import updateUserInvitation from "@/server-actions/updateUserInvitation";
import { BsThreeDotsVertical } from "react-icons/bs";

const AddPeople = ({
  groupId,
  profileName,
}: {
  groupId: string;
  profileName: string;
}) => {
  const [downState, setDownState] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    setDownState(false);
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
        onClick={() => setDownState((prev) => !prev)}
        className=" focus:outline-none"
      >
        <BsThreeDotsVertical className="size-8" />
      </button>
      {downState && (
        <div
          onClick={() => setDownState(false)}
          className="fixed inset-0"
        ></div>
      )}
      <button
        onClick={openModal}
        disabled={!downState}
        className={`primary absolute bg-white rounded shadowAround px-4 py-2 -left-24 -bottom-3 text-nowrap ${
          downState ? " inline-block " : " hidden "
        }`}
      >
        Invite people
      </button>
      <dialog className="rounded focus:outline-none" ref={dialogRef}>
        <form
          action={(formData) =>
            updateUserInvitation({ formData, groupId, profileName })
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          ref={formRef}
          className="flex flex-col items-center mx-14 my-12"
        >
          <div className="flex flex-col gap-2 relative">
            <input
              name="username"
              placeholder=""
              className="outline-none border-b-2 z-50 border-black px-2 py-1 bg-transparent peer"
              type="text"
            />
            <span className="absolute -z-40 mx-2 mb-2 left-0 text-gray-500 duration-200 peer-focus:-top-6 peer-focus:-left-1 peer-focus:text-black peer-focus:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base">
              @username
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
          >
            Invite
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AddPeople;

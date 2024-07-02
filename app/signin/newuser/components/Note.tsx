import React from "react";
import { PiNotePencil } from "react-icons/pi";

const Note = () => {
  return (
    <div className="text-black flex gap-2 my-3">
      <PiNotePencil className="mt-2" />
      <p className="w-64 text-[15px]">
        Once you've successfully logged in, you can change your username and
        profile picture in the settings.
      </p>
    </div>
  );
};

export default Note;

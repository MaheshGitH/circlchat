import React from "react";
import DotPattern from "../Background/DotPattern";

const Message = () => {
  return (
    <>
      <div className="p-2 flex gap-10 flex-col">
        <DotPattern />
        <h2
          className={`font-bold text-[28px] sm:self-center sm:text-4xl xl:text-[40px] transition-[font-size] relative xl:before:content-['"'] before:absolute before:-left-4 xl:after:content-['"'] after:absolute after:-right-4 before:text-[#9757ff] after:text-[#9757ff]`}
        >
          Perfect Place to Connect and Collaborate
        </h2>
        <h3 className="text-xl text-center dark:text-white/80 max-w-[700px]">
          Create a group, invite people, and collaborate all in one place.
          Seamlessly work together, sharing ideas to achieve collective results.
          This platform serves as your go-to for connecting and accomplishing
          goals collaboratively.
        </h3>
      </div>
    </>
  );
};

export default Message;

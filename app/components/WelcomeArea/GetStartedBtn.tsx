import React from "react";

const GetStartedBtn = () => {
  return (
    <div className=" flex justify-center">
      <button className="border-[2px] backdrop-blur-2xl px-10 py-3 rounded primary border-primary relative group lg:hover:text-white duration-150">
        Get started
        <span className="bg-primary absolute left-0 top-0 bottom-0 right-40 duration-200 lg:group-hover:right-0 -z-20"></span>
      </button>
    </div>
  );
};

export default GetStartedBtn;

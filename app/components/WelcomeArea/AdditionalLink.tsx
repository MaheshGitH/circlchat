import React from "react";

const AdditionalLink = () => {
  return (
    <div className="mt-10 flex justify-center gap-10">
      <button className="relative group text-[16px] lg:text-[18px]">
        Developer
        <span className="absolute w-[70px] lg:w-[79px] h-[4px] bg-primary rounded bottom-0 left-0 duration-150 lg:group-hover:w-0" />
      </button>
      <button className="relative group text-[16px] lg:text-[18px]">
        Blog
        <span className="absolute w-[32px] lg:w-[36px] h-[4px] bg-primary rounded bottom-0 left-0 duration-150 lg:group-hover:w-0" />
      </button>
    </div>
  );
};

export default AdditionalLink;

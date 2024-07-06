import Link from "next/link";
import React from "react";

const GroupThread = () => {
  return (
    <span className="flex w-full mb-2">
      <Link
        className="primary border-primary border-b-2 relative flex-1 text-center py-4 after:content-[''] after:w-[2px] after:h-4 after:absolute after:bg-black after:top-6 after:translate-x-[1px] after:rounded-full after:right-0"
        href={"/group"}
      >
        Group
      </Link>

      <Link
        className="border-b-2 border-black flex-1 text-center py-4"
        href={"/thread"}
      >
        Thread
      </Link>
    </span>
  );
};

export default GroupThread;

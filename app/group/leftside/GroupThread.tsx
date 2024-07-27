import Link from "next/link";
import React from "react";

const GroupThread = () => {
  return (
    <span className="flex w-full mb-2">
      <Link
        className="primary border-primary border-b-2 relative flex-1 text-center py-4 after:content-[''] after:w-[2px] after:h-4 after:absolute after:bg-black dark:after:bg-white/75 after:top-6 after:translate-x-[1px] after:rounded-full after:right-0"
        href={"/group"}
      >
        Group
      </Link>

      <button
        disabled
        className="border-b-2 border-black dark:border-white/75 flex-1 text-center py-4 dark:text-white/75"
      >
        Thread
      </button>
    </span>
  );
};

export default GroupThread;

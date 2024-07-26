"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { CgSpinner } from "react-icons/cg";

const Continue = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`" bg-primary text-white rounded py-3 flex justify-center items-center duration-200 ${
        pending ? "gap-2 blur-[0.5px]" : " gap-0"
      }`}
      type="submit"
    >
      Continue {pending && <CgSpinner className="size-5 animate-spin" />}
    </button>
  );
};

export default Continue;

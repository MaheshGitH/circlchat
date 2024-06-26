import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CgSpinner } from "react-icons/cg";
import { signIn } from "next-auth/react";

interface Props {
  disable: boolean;
  Provider: (value: string) => void;
}

const GoogleSignIn = ({ disable, Provider }: Props) => {
  const [status, setStatus] = useState(false);
  return (
    <button
      disabled={disable}
      onClick={() => {
        Provider("google");
        setStatus(true);
        signIn("google", { callbackUrl: "/" });
      }}
      className={` disabled:blur-[0.6px] text-black  w-72 flex items-center pl-5 py-2 border-black border-[1px] rounded-md bg-white m-4 ${
        status ? "gap-6" : "gap-8"
      } duration-100`}
    >
      <FcGoogle className="size-9" />
      Sign in with Google
      {status ? <CgSpinner className="size-6 animate-spin" /> : null}
    </button>
  );
};

export default GoogleSignIn;

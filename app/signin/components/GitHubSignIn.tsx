import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  disable: boolean;
  Provider: (value: string) => void;
}

const GitHubSignIn = ({ disable, Provider }: Props) => {
  const [status, setStatus] = useState(false);

  return (
    <button
      disabled={disable}
      onClick={() => {
        Provider("git");
        setStatus(true);
        signIn("github", { callbackUrl: "/signin/newuser" });
      }}
      className={`disabled:blur-[0.6px] text-black mb-10  w-72 flex items-center pl-5 py-2 border-black border-[1px] rounded-md bg-white m-4 ${
        status ? "gap-6" : "gap-8"
      } duration-100`}
    >
      <IoLogoGithub className="size-9" /> Sign in with GitHub
      {status ? <CgSpinner className="size-6 animate-spin" /> : null}
    </button>
  );
};

export default GitHubSignIn;

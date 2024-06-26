import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { CgSpinner } from "react-icons/cg";

interface Props {
  disable: boolean;
  Provider: (value: string) => void;
}

const ResendSignIn = ({ disable, Provider }: Props) => {
  const [status, setStatus] = useState(false);
  const handleSubmit = async (event: FormEvent) => {
    Provider("resend");
    setStatus(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    await signIn("resend", { email, callbackUrl: "/" });
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="text-black cursor-pointer mb-4" htmlFor="email">
        Verify your email
      </label>
      <input
        className="bg-gray-200 w-72 text-black pl-5 pr-2 py-3 rounded-md border-b border-black focus:outline-none"
        type="text"
        id="email"
        name="email"
        placeholder="Email"
      />
      <button
        disabled={disable}
        className="bg-primary disabled:blur-[0.6px] w-72 py-3 flex justify-center items-center gap-4 rounded-md mt-10"
        type="submit"
      >
        Next{status ? <CgSpinner className="size-5 animate-spin" /> : null}
      </button>
    </form>
  );
};

export default ResendSignIn;

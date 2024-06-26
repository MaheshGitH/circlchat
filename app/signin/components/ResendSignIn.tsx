import React, { FormEvent } from "react";

const ResendSignIn = () => {
  const handleSubmit = (event: FormEvent) => {};
  return (
    <form className="flex flex-col" onSubmit={(event) => handleSubmit(event)}>
      <label className="text-black cursor-pointer" htmlFor="email">
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
        className="bg-primary w-72 py-3 inline-block rounded-md mt-5"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default ResendSignIn;

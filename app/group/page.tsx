import React from "react";
import LeftSide from "./leftside/LeftSide";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/signin");
  return (
    <div className="flex h-dvh w-screen">
      <div className="md:max-w-96 w-full flex-grow">
        {" "}
        <LeftSide></LeftSide>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default page;

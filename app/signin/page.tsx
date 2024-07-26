import React from "react";
import SignInPage from "./SignInPage";
import BackGround from "./components/BackGround";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user) redirect("/group");
  return (
    <BackGround>
      <SignInPage></SignInPage>
    </BackGround>
  );
};

export default page;

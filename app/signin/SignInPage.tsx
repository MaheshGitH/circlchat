"use client";
import ResendSignIn from "./components/ResendSignIn";
import GoogleSignIn from "./components/GoogleSignIn";
import GitHubSignIn from "./components/GitHubSignIn";
import AppLogo from "./components/AppLogo";
import { useState } from "react";

export default function SignInPage() {
  const [selectedProvider, setSelectedProvider] = useState("");

  return (
    <div className="flex flex-col p-4 items-center">
      <AppLogo></AppLogo>
      <ResendSignIn
        disable={selectedProvider !== ""}
        Provider={(value) => setSelectedProvider(value)}
      ></ResendSignIn>
      <div className="flex items-center justify-between my-8">
        <span className=" w-32 h-px bg-black"></span>
        <span className="text-black px-2">or</span>
        <span className=" w-32 h-px bg-black"></span>
      </div>
      <GoogleSignIn
        disable={selectedProvider !== ""}
        Provider={(value) => setSelectedProvider(value)}
      ></GoogleSignIn>
      <GitHubSignIn
        disable={selectedProvider !== ""}
        Provider={(value) => setSelectedProvider(value)}
      ></GitHubSignIn>
    </div>
  );
}

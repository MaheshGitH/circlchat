"use client";
import { FormEvent, useState } from "react";
import ResendSignIn from "./components/ResendSignIn";
import GoogleSignIn from "./components/GoogleSignIn";
import GitHubSignIn from "./components/GitHubSignIn";

export default function SignInPage() {
  return (
    <div className="flex flex-col p-4 items-center">
      <ResendSignIn></ResendSignIn>
      <GoogleSignIn></GoogleSignIn>
      <GitHubSignIn></GitHubSignIn>
    </div>
  );
}

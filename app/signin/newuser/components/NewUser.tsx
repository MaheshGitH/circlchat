import React from "react";
import AppLogo from "../../components/AppLogo";
import UserDetail from "./UserDetail";

const NewUser = () => {
  return (
    <div className="flex flex-col p-4 items-center">
      <span className="size-20">
        <AppLogo></AppLogo>
      </span>
      <UserDetail></UserDetail>
    </div>
  );
};

export default NewUser;

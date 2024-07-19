import Logo from "@/app/components/Logo";
import React from "react";
import GroupThread from "./GroupThread";
import Mail from "./Mail";
import { auth } from "@/auth";

const Head = async () => {
  const session = await auth();
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  const invitationNum =
    user?.invitaion.length! > 99 ? "99+" : user?.invitaion.length;
  return (
    <section className="mb-2">
      <div className="flex justify-between">
        <span className="size-20 flex ml-5 md:ml-36 duration-200">
          <Logo />
        </span>
        <Mail
          group={user?.invitaion!}
          userId={user?.user_id!}
          invitationNum={invitationNum as number | "99+"}
        ></Mail>
      </div>
      <GroupThread />
    </section>
  );
};

export default Head;

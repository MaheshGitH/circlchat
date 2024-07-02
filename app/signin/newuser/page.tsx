import { auth } from "@/auth";
import { prisma } from "@/prisma/prismaClient";
import { redirect } from "next/navigation";
import BackGround from "../components/BackGround";
import NewUser from "./components/NewUser";

const page = async () => {
  const session = await auth();
  if (!session?.user?.email) redirect("/signin");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (user?.createdAt.getTime() === user?.updatedAt.getTime()) {
    return (
      <BackGround>
        <NewUser></NewUser>
      </BackGround>
    );
  } else {
    redirect("/");
  }
};

export default page;

"use server";
import { auth } from "@/auth";
import { prisma } from "@/prisma/prismaClient";
import { redirect } from "next/navigation";

export default async function updateNewUser(formData: FormData) {
  const session = await auth();
  const userName = formData.get("username");
  const userId = formData.get("userid");
  if (session !== null && session?.user?.email) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name: userName as string,
        user_id: ("@" + userId) as string,
      },
    });
  }
  redirect("/group");
}

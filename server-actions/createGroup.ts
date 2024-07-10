"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prismaClient";
import { redirect } from "next/navigation";

export default async function createGroup(formData: FormData) {
  const groupName = formData.get("groupName") as string;
  const session = await auth();

  if (!session) redirect("/signin");
  try {
    await prisma.$transaction(async (prisma) => {
      const group = await prisma.group.create({
        data: {
          groupName: groupName,
        },
      });

      await prisma.user.update({
        where: {
          email: session.user?.email || "",
        },
        data: {
          groups: {
            push: {
              groupId: group.id,
              groupName: groupName,
              image: group.image || "",
            },
          },
        },
      });
    });
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

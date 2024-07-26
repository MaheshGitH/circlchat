"use server";

import { prisma } from "@/prisma/prismaClient";

export default async function createGroup(formData: FormData) {
  const groupName = formData.get("groupName") as string;
  const userId = formData.get("userId") as string;

  try {
    await prisma.$transaction(async (prisma) => {
      const group = await prisma.group.create({
        data: {
          groupName: groupName,
          users: {
            user_Id: userId,
          },
        },
      });

      await prisma.user.update({
        where: {
          user_id: userId || "",
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

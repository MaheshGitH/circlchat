"use server";

import { prisma } from "@/prisma/prismaClient";

interface Props {
  groupId: string;
  userId: string;
  groupName: string;
  formData: FormData;
}

export default async function acceptReject({
  userId,
  formData,
  groupId,
  groupName,
}: Props) {
  const acceptReject = formData.get("action");
  console.log(groupId);
  if (acceptReject === "Accept") {
    try {
      await prisma.$transaction(async (prisma) => {
        const user = await prisma.user.update({
          where: {
            user_id: userId,
          },

          data: {
            invitaion: {
              deleteMany: {
                where: {
                  groupId: groupId,
                },
              },
            },
          },
        });
        await prisma.user.update({
          where: {
            user_id: userId,
          },
          data: {
            groups: {
              push: {
                groupId: groupId,
                groupName: groupName,
              },
            },
          },
        });
      });
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  }
}

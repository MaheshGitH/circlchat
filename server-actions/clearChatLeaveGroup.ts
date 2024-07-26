"use server";
import { auth } from "@/auth";
import mongoClient from "@/mongodb/mongodb";
import { prisma } from "@/prisma/prismaClient";

export default async function clearChatLeaveGroup(formData: FormData) {
  const id = formData.get("groupId") as string;
  const userId = formData.get("userId") as string;
  const action = formData.get("action");

  if (action === "clear") {
    const db = (await mongoClient).db("conversation");
    db.collection(id).deleteMany({});
  }

  if (action === "leave") {
    const group = await prisma.group.findUnique({
      where: {
        id: id,
      },
    });

    if (group?.users.length === 1) {
      const db = (await mongoClient).db("conversation");
      db.collection(id).drop();

      await prisma.$transaction(async (prisma) => {
        await prisma.group.delete({
          where: {
            id: id,
          },
        });
        await prisma.user.update({
          where: {
            user_id: userId!,
          },
          data: {
            groups: {
              deleteMany: {
                where: {
                  groupId: id,
                },
              },
            },
          },
        });
      });
    } else {
      await prisma.$transaction(async (prisma) => {
        await prisma.user.update({
          where: {
            user_id: userId!,
          },
          data: {
            groups: {
              deleteMany: {
                where: {
                  groupId: id,
                },
              },
            },
          },
        });

        await prisma.group.update({
          where: {
            id: id,
          },
          data: {
            users: {
              deleteMany: {
                where: {
                  user_Id: userId,
                },
              },
            },
          },
        });
      });
    }
  }
}

"use server";
import { auth } from "@/auth";
import mongoClient from "@/mongodb/mongodb";
import { prisma } from "@/prisma/prismaClient";

export default async function clearChatLeaveGroup(formData: FormData) {
  const session = await auth();
  const id = formData.get("groupId");
  const action = formData.get("action");

  console.log(action);
  if (action === "clear") {
    const db = (await mongoClient).db("conversation");
    db.collection(id as string).drop();
  }

  if (action === "leave") {
    await prisma.user.update({
      where: {
        email: session?.user?.email!,
      },
      data: {
        groups: {
          deleteMany: {
            where: {
              groupId: id as string,
            },
          },
        },
      },
    });
  }
}

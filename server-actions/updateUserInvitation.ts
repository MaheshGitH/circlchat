"use server";

import { auth } from "@/auth";

interface Props {
  formData: FormData;
  groupId: string;
  profileName: string;
}

export default async function updateUserInvitation({
  formData,
  groupId,
  profileName,
}: Props) {
  const session = await auth();
  const userName = formData.get("username");

  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  await prisma?.user.update({
    where: {
      user_id: ("@" + userName) as string,
    },
    data: {
      invitation: {
        push: {
          PWS: user?.user_id as string,
          groupId: groupId,
          groupName: profileName,
        },
      },
    },
  });
}

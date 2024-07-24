import React from "react";
import Image from "next/image";
import { PiNotePencil } from "react-icons/pi";
import { auth } from "@/auth";

const Profile = async () => {
  const session = await auth();
  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  return (
    <div className="flex justify-between w-60 border-2 border-black rounded-[5px] px-2 py-1">
      <span className="size-14 bg-slate-500 overflow-hidden rounded-full flex justify-center">
        <Image
          style={{ objectFit: "cover" }}
          alt="profile picture"
          src="/bugatti-veyron.jpg"
          width={56}
          height={56}
        ></Image>
      </span>
      <span className="h-10 w-1 rounded-full self-center bg-black" />
      <span>
        <p className="font-bold text-[18px] mt-px">{user?.name}</p>
        <p className="text-[14px]">{user?.user_id}</p>
      </span>
      <PiNotePencil className=" my-auto size-6" />
    </div>
  );
};

export default Profile;

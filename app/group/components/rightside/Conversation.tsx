import Image from "next/image";
import React from "react";

const Conversation = () => {
  return (
    <ul className="mb-2">
      <li className="flex flex-col gap-2 w-10/12 lg:w-1/2 max-w-[750px] px-2 py-1 2xl:max-w-[800px] rounded border-2">
        <div className="gap-2 flex items-center">
          <span className="size-7 overflow-hidden rounded-full flex">
            <Image
              style={{ objectFit: "cover" }}
              src="/bugatti-veyron.jpg"
              height={28}
              width={28}
              alt="next image"
            />
          </span>
          <p className="font-semibold">Mahesh</p>
          <p className="text-xs ml-auto">2 hr ago</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          accusamus ipsa, id consectetur et dignissimos cupiditate veritatis
          temporibus asperiores obcaecati, aliquam maiores voluptates? Dolorem
          qui laboriosam quaerat odit, mollitia fugit.
        </p>
      </li>
    </ul>
  );
};

export default Conversation;

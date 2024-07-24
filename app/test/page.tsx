"use client";
import React, { useEffect, useState } from "react";
import { socket } from "../socket";

const page = () => {
  const [increment, setIncrement] = useState(0);
  useEffect(() => {
    socket.emit("initial", increment);

    socket.on("recieveInt", (data) => {
      console.log(data);
    });
  }, [increment]);
  return (
    <div>
      <button onClick={() => setIncrement((prev) => prev + 1)}>click</button>
    </div>
  );
};

export default page;

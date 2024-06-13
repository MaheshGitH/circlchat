import React from "react";

const Blob = () => {
  return (
    <div className="absolute inset-0 -z-20 flex flex-col gap-14 p-14">
      <span className="blob size-24 inline-block self-end  relative"></span>
      <span className="blob size-24 inline-block "></span>
      <span className="reverseBlob size-24 inline-block self-center"></span>
      <span className="blob size-24 inline-block self-end "></span>
      <span className="reverseBlob size-24 inline-block"></span>
    </div>
  );
};

export default Blob;

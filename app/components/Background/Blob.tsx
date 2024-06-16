import styles from "./styles.module.css";
import React from "react";

const Blob = () => {
  return (
    <div className="absolute inset-0 -z-20 flex flex-col gap-14 p-14 overflow-hidden">
      <span className={`${styles.blob} self-end`} />
      <span className={`${styles.blob} self-start`} />
      <span
        className={`${styles.reverseBlob} lg:absolute top-80 self-center`}
      />
      <span className={`${styles.blob} self-end`} />
      <span className={`${styles.reverseBlob} self-start`} />
    </div>
  );
};

export default Blob;

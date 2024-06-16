import React from "react";
import styles from "./styles.module.css";

const DotPattern = () => {
  return (
    <div
      className={`${styles.dotPattern} lg:size-60 absolute -z-3 0 self-center -z-40`}
    ></div>
  );
};

export default DotPattern;

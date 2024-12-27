import React from "react";
import styles from "./CircularAvatar.module.css";

const CircularAvatar = ({ size = 24, url }) => {
  return (
    <div>
      <div className={styles.avatar} style={{ height: size, width: size }}>
        <img src={url} className={styles.img} />
      </div>
    </div>
  );
};

export default CircularAvatar;

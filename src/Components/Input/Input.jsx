import styles from "./Input.module.css";
import React, { ChangeEvent } from "react";

const Input = ({ placeholder, value, type = "text", onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

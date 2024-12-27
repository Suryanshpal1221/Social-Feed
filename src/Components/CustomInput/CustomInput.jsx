import styles from "./CustomInput.module.css";
import { IoMdSearch } from "react-icons/io";

function CustomInput() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <IoMdSearch size={20} color="black" />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for friend, post or video"
      />
    </div>
  );
}

export default CustomInput;

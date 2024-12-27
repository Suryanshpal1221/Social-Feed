import { IconWrapper } from "../index";
import styles from "./IconText.module.css";

const IconText = ({ Icon, text, size, color, onClick }) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <IconWrapper Icon={Icon} size={size} color={color} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default IconText;

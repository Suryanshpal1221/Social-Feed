import { CircularAvatar } from "..";
import styles from "./FriendCard.module.css";

const FriendCard = ({
  online = false,
  onClick,
  name,
  ImageUrl = "https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg",
}) => {
  return (
    <div className={styles.friend} onClick={onClick}>
      {online && <div className={styles.greendot} />}
      <CircularAvatar url={ImageUrl} size={32} />
      <span>{name}</span>
    </div>
  );
};

export default FriendCard;

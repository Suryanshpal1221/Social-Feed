import { CustomInput, IconWrapper, CircularAvatar } from "../index";
import { icons } from "../IconWrapper/Icons";
import styles from "./Header.module.css";

function Header({
  ProfileUrl = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid",
}) {
  return (
    <div className={styles.main}>
      <text className={styles.appIcon}>SocialFeed</text>
      <div className={styles.middle}>
        <CustomInput />
        <div className={styles.pages}>
          <text>Homepage</text>
          <text>Timeline</text>
        </div>
      </div>
      <div className={styles.iconCont}>
        <div className={styles.icons}>
          <IconWrapper Icon={icons.fauserlarge} size={16} />
          <IconWrapper Icon={icons.mdmessage} size={20} />
          <IconWrapper Icon={icons.bsbellfill} size={16} />
        </div>
        <div className={styles.displayProfile}>
          <CircularAvatar size={32} url={ProfileUrl} />
        </div>
      </div>
    </div>
  );
}

export default Header;

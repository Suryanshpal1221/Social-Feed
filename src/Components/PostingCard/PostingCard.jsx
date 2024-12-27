import { CircularAvatar, IconWrapper } from "..";
import styles from "./PostingCard.module.css";
import { icons } from "../IconWrapper/Icons";

const AttachmentComp = ({ Icon, size, color, text, onClick }) => {
  return (
    <div className={styles.AttachmentComp} onClick={onClick}>
      <IconWrapper Icon={Icon} size={size} color={color} />
      <span
        style={{
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "500",
          marginLeft: 2,
        }}
      >
        {text}
      </span>
    </div>
  );
};

const handlePhotoVideo = () => {
  console.log("Upload photo or video");
};
const handleTag = () => {};
const handleLocation = () => {};
const handleFeelings = () => {};

const handleShare = () => {};

function PostingCard({
  ProfileUrl = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid",
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <CircularAvatar url={ProfileUrl} size={40} />
        <textarea placeholder="What's in your mind ritesh?" />
      </div>
      <div className={styles.attachmentsSection}>
        <div className={styles.attachmentComp}>
          <AttachmentComp
            Icon={icons.mdvideolibrary}
            size={20}
            text="Photo or Video"
            color="#FF7043"
            onClick={handlePhotoVideo}
          />
          <AttachmentComp
            Icon={icons.pitagsimplefill}
            size={20}
            text="Tag"
            color="blue"
            onClick={handleTag}
          />
          <AttachmentComp
            Icon={icons.falocationdot}
            size={20}
            text="Location"
            color="green"
            onClick={handleLocation}
          />
          <AttachmentComp
            Icon={icons.mdemojiemotions}
            size={20}
            text="Feelings"
            color="#FDD835"
            onClick={handleFeelings}
          />
        </div>
        <button className={styles.btn} onClick={handleShare}>
          Share
        </button>
      </div>
    </div>
  );
}

export default PostingCard;

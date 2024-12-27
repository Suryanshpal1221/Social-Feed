import { CircularAvatar, IconWrapper } from "../index.js";
import styles from "./PostCard.module.css";
import { icons } from "../IconWrapper/Icons.js";

const PostCard = ({
  ProfileUrl = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid",
  ImageUrl = "https://www.visitdubai.com/-/media/gathercontent/article/g/guide-to-dubai-metro/fallback-image/guide-to-dubai-metro-hero-gettyimages.jpg",
  Caption = "Love For All, Hatred For None.",
  Name = "Ritesh Jamwal",
  Time = "5",
  Likes = "92",
  Comments = "12",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.postInfo}>
          <CircularAvatar url={ProfileUrl} size={28} />
          <span className={styles.name}>{Name}</span>
          <span className={styles.time}>{Time} mins ago</span>
        </div>
        <IconWrapper Icon={icons.sloptionsvertical} />
      </div>
      <div className={styles.caption}>
        <span className={styles.captionText}>{Caption}</span>
      </div>
      <div className={styles.image}>
        <img src={ImageUrl} alt="JPG" />
      </div>
      <div className={styles.react}>
        <div>
          <IconWrapper Icon={icons.fathumsup} size={20} />
          <span>{Likes} people liked your post</span>
        </div>
        <div>
          <IconWrapper Icon={icons.faregcommentdots} size={20} />
          <span>{Comments} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import styles from "./Homepage.module.css";
import {
  SideBar,
  PostingCard,
  PostCard,
  IconWrapper,
  FriendCard,
  Header,
} from "../../Components";
import { icons } from "../../Components/IconWrapper/Icons";

function Homepage() {
  return (
    <div>
      <Header />
      <div className={styles.section1}>
        <SideBar />
        <div className={styles.contentContainer}>
          <div className={styles.leftGrid}>
            <PostingCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className={styles.rightGrid}>
            <div className={styles.birthday}>
              <IconWrapper Icon={icons.facakecandles} size={32} />
              <div>
                <span>Anurag</span> and <span>3 other friends</span> have a
                Birthday today.Wish them happy birthday.
              </div>
            </div>
            <div className={styles.img}>
              <img
                src="https://www.lightxeditor.com/app/wp-content/uploads/2021/03/how-to-put-image-inside-text.jpg"
                alt="Wildlife"
              />
            </div>
            <div className={styles.title}>Online Friends</div>
            <div className={styles.onlineFr}>
              <FriendCard online={true} name={"Anurag Verma"} />
              <FriendCard online={true} name={"Ritesh Jamwal"} />
              <FriendCard online={true} name={"Himanshu Bisht"} />
              <FriendCard online={true} name={"Ayush Khole"} />
              <FriendCard online={true} name={"Uttam Singh"} />
              <FriendCard online={true} name={"Vivek Singh"} />
              <FriendCard online={true} name={"Ankit Kumar"} />
              <FriendCard online={true} name={"Altamash Tamboli"} />
              <FriendCard online={true} name={"Chaitanya Sahare"} />
              <FriendCard online={true} name={"Dhruv Sharma"} />
              <FriendCard online={true} name={"Aakash Saini"} />
              <FriendCard online={true} name={"Parth Thapan"} />
              <FriendCard online={true} name={"Bhavya Gautam"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

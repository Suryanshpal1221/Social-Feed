import {
  MdRssFeed,
  MdMessage,
  MdVideoLibrary,
  MdEmojiEmotions,
  MdPeopleAlt,
  MdEvent,
} from "react-icons/md";
import { FaUserLarge, FaLocationDot, FaCakeCandles } from "react-icons/fa6";
import { BsBellFill } from "react-icons/bs";
import { PiTagSimpleFill, PiSuitcaseSimple } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import {
  FaThumbsUp,
  FaRegCommentDots,
  FaPlayCircle,
  FaBookmark,
  FaRegQuestionCircle,
  FaUserGraduate,
} from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";

export const icons = {
  mdrssfeed: MdRssFeed,
  mdmessage: MdMessage,
  fauserlarge: FaUserLarge,
  bsbellfill: BsBellFill,
  mdvideolibrary: MdVideoLibrary,
  pitagsimplefill: PiTagSimpleFill,
  falocationdot: FaLocationDot,
  mdemojiemotions: MdEmojiEmotions,
  sloptionsvertical: SlOptionsVertical,
  fathumsup: FaThumbsUp,
  fclike: FcLike,
  faregcommentdots: FaRegCommentDots,
  facakecandles: FaCakeCandles,
  sidebaricons: [
    MdRssFeed,
    BiSolidCommentDetail,
    FaPlayCircle,
    MdPeopleAlt,
    FaBookmark,
    FaRegQuestionCircle,
    PiSuitcaseSimple,
    MdEvent,
    FaUserGraduate,
  ],
};

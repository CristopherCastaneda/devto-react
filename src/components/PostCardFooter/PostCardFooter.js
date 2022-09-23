import React from "react";
import CardReationFooter from "../CardReactionFooter/CardReationFooter";
import PostCardReationDetail from "../PostCardReationDetail/PostCardReationDetail";
import styles from "./PostCardFooter.module.scss";

const PostCardFooter = () => {
  return (
    <div className={`${styles.mainIcons} d-flex justify-content-between mb-3`}>
      <div className={`d-flex justify-content-between ${styles.cardReactions}`}></div>
      <PostCardReationDetail/>
      <CardReationFooter/>
    </div>
  );
};

export default PostCardFooter;

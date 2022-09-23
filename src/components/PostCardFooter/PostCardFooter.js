import React from "react";
import CardReationFooter from "../CardReactionFooter/CardReationFooter";
import PostCardReationDetail from "../PostCardReationDetail/PostCardReationDetail";
import PostCardReationDetails from "../PostCardReationDetails/PostCardReationDetails";
import styles from "./PostCardFooter.module.scss";

const PostCardFooter = ({readTime, nComments}) => {
  return (
    <div className={`${styles.mainIcons} d-flex justify-content-between mb-3`}>
      <div className={`d-flex justify-content-between ${styles.cardReactions}`}></div>
      <PostCardReationDetail/>
      <PostCardReationDetails/>
      <CardReationFooter readTime={readTime} nComments={nComments} />
    </div>
  );
};

export default PostCardFooter;

import React from "react";
import PostCardHeader from "../PostCardHeader/PostCardHeader";
import styles from "./MainCard.module.scss";

const MainCard = ({ postBanner, userName, postDate, userPhoto, postTitle, tags }) => {
  return (
    <div className={`${styles.card} p-2 p-md-3 mt-3`}>
      {postBanner && <img src={postBanner} alt=""></img>}
      <PostCardHeader userName={userName} postDate={postDate} userPhoto={userPhoto} postTitle={postTitle} tags={tags} />
    </div>
  );
};

export default MainCard;

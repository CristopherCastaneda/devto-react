import React from "react";
import MainProfile from "../MainProfile/MainProfile";
import PostCardBody from "../PostCardBody/PostCardBody";
import ProfileName from "../ProfileName/ProfileName";
import styles from "./PostCardHeader.module.scss"

const PostCardHeader = ({userName, postDate, userPhoto, postTitle, tags, readTime, nComments, id}) => {
  return (
    <div className={`${styles.cardBody} card-body p-1 p-xl-3`}>
            <div className="d-flex align-items-center mb-3">
            <MainProfile userPhoto={userPhoto} /> 
            <ProfileName userName={userName} postDate={postDate}/>
            </div>
            <PostCardBody postTitle={postTitle} tags={tags} readTime={readTime} nComments={nComments} id={id}/>        
    </div>
  );
};

export default PostCardHeader;

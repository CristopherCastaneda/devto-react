import React from "react";
import PostCardFooter from "../PostCardFooter/PostCardFooter";
import styles from "./PostCardBody.module.scss";
import {Link} from "react-router-dom"

const PostCardBody = ({postTitle, tags, readTime, nComments, id}) => {
  return (
    <div className={`${styles.cardContent} p-0 ps-md-5}`}>
          <h3><Link to={`/detail/${id}`}> {postTitle}</Link></h3>
                <div className="d-flex my-3">
                {tags}
                </div>
          <PostCardFooter readTime={readTime} nComments={nComments}/>
    </div>
  );
};

export default PostCardBody;

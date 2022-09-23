import React from "react";
import PostCardFooter from "../PostCardFooter/PostCardFooter";
import styles from "./PostCardBody.module.scss";


const PostCardBody = ({PostTitle, tags}) => {
  return (
    <div className={`${styles.cardContent} p-0 ps-md-5}`}>
          <h3><a href="">{PostTitle}</a></h3>
                <div className="d-flex my-3">
                {tags}
                </div>
          <PostCardFooter/>
    </div>
  );
};

export default PostCardBody;

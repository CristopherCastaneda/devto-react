import React from "react";
import styles from "./PostCardReationDetails.module.scss";

const PostCardReationDetails = ({nComments}) => {
  return (
    <div className={styles.cardReactionsDetail}>
      <a href="detail.html?id=${post._id}" className="textDecorationNone">
        <svg
          className={styles.crayonsIcon}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
        </svg>
        <span className="d-none d-md-block"> {nComments}comments</span>
      </a>
    </div>
  );
};

export default PostCardReationDetails;


import React from "react";
import styles from "./CardReationFooter.module.scss";

const CardReationFooter = ({readTime}) => {
  return (
    <div className={`d-flex justify-content-between ${styles.cardReactions}`}>
      <a href="" className={`${styles.textDecorationNone} me-2`}>
        {readTime} min
      </a>
      <button className={`btn btn-secondary ${styles.btnSavePost} `}>
        save
      </button>
    </div>
  );
};
//${savedPost.includes(post._id) ? "Saved" : "Save"}
//data-postid="${post._id}
export default CardReationFooter;

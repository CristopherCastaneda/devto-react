import React from "react";
import styles from "./CardReationFooter.module.scss";

const CardReationFooter = () => {
  return (
    <div className={`d-flex justify-content-between ${styles.cardReactions}`}>
      <a href="" className={`${styles.textDecorationNone} me-2`}>
        ${post.read_time} min
      </a>
      <button className={`btn btn-secondary ${styles.btnSavePost} data-postid="${post._id}`}>
        ${savedPost.includes(post._id) ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default CardReationFooter;

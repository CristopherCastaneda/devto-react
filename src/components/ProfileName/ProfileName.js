import React from "react";
import styles from "./ProfileName.module.scss";


const ProfileName = ({userName, postDate}) => {
  return (
        <div className={`mx-2 ${styles.profileName} p-1`}>
            <a href="" className={styles.textDecorationNone}>{userName}</a>
            <p className={styles.postDate}>{postDate}</p> 
        </div>
  );
};

export default ProfileName;

//${new Date(postDate).toLocaleDateString('en-us', dateFormatOptions) my-0 

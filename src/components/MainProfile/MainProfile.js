import React from "react";
import styles from "./MainProfile.module.scss";


const MainProfile = ({userPhoto}) => {
  return (
<div className={`${styles.mainProfile} rounded-circle overflow-hidden`}>
    <img src= {userPhoto} alt="profile" />
</div>
  );
};

export default MainProfile;




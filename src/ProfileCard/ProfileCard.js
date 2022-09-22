import React from 'react';
import styles from "./ProfileCard.module.scss";
import ProfileHeader from './ProfileHeader/ProfileHeader';

const ProfileCard = () => {
  return (
    <div className="card card-profile m-0 ms-md-2 ms-lg-0 ">
        <div className={styles.cardBorder}></div>  
        <div className="card-body p-3 pt-0">
             <ProfileHeader photo="https://firebasestorage.googleapis.com/v0/b/devtorocketg20.appspot.com/o/1661890536855-cristo.png?alt=media&token=8f721c95-65c5-43ad-8c1e-19f2519477db" userName="Cristopher" />
        </div>                
    </div>   

  )
}

export default ProfileCard;
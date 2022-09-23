import React from 'react';
import styles from "./ProfileHeader.module.scss"

const ProfileHeader = ({photo, userName}) => {
  return (
    <div className={styles.cardProfileHeader}>
        <a href="/#" className="d-flex align-items-end">
            <div className={`${styles.cardProfileAvatar} rounded-circle`}>
                <img src={photo} className="img-fluid" alt="" />
            </div>
            <span className="card-profile-name">{userName}</span>
        </a>
    </div>
  )
}

export default ProfileHeader;
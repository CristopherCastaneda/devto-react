import React from 'react';
import { Image } from 'react-bootstrap';
import styles from "./ProfileHeader.module.scss";
import defaultAvatar from '../../../assets/dummy.png'

const ProfileHeader = ({photo, userName}) => {

  const addDefaultSrc = (ev) => {
    ev.target.src = defaultAvatar;
}
  return (
    <div className={styles.cardProfileHeader}>
        <a href="/#" className="d-flex align-items-end">
            <div className={`${styles.cardProfileAvatar}`}>
                <Image onError={addDefaultSrc} src={photo} roundedCircle width="40" height="40" />
            </div>
            <span className="card-profile-name">{userName}</span>
        </a>
    </div>
  )
}

export default ProfileHeader;
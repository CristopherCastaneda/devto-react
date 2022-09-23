import Button from 'react-bootstrap/Button';
import React from 'react';
import styles from "./ProfileCard.module.scss";
import ProfileHeader from './ProfileHeader/ProfileHeader';
import DescriptionListsItem from '../DescriptionListItem/DescriptionListsItem';

const ProfileCard = ({user}) => { 
  return (
    <div className={`card ${styles.cardProfile} m-0 ms-md-2 ms-lg-0`}>
      <div className={styles.cardBorder}></div>
      <div className="card-body p-3 pt-0">
        <ProfileHeader photo={user.profile_photo} userName={user.user_name} />
        <div className={`mt-4 ${styles.btnFollowContainer}`}>
          <Button variant="follow">Follow</Button>
        </div>
        <div className={`${styles.cardProfileTitle} mt-4`}>
          Software Engineer, Pokemon Master at <strong>Team Rocket</strong>
        </div>
        <ul className="list-unstyled">
          <DescriptionListsItem title="Location" text={user.location} />
          <DescriptionListsItem title="Education" text={user.education} />
          <DescriptionListsItem title="Joined" text={new Date(user.registration_date).toLocaleDateString("en-us",{  year: 'numeric', month: 'long', day: 'numeric' })} />          
        </ul>
      </div>
    </div>   

  )
}

export default ProfileCard;
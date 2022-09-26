import Button from 'react-bootstrap/Button';
import React from 'react';
import styles from "./ProfileCard.module.scss";
import ProfileHeader from './ProfileHeader/ProfileHeader';
import DescriptionListsItem from '../DescriptionListItem/DescriptionListsItem';
import Card from 'react-bootstrap/Card';
import { usePost } from '../../context/PostContext';

const ProfileCard = () => { 
  const { postData  } = usePost(); 

  return (
    <Card>
      <div className={styles.cardBorder}></div>
      <ProfileHeader photo={postData.user.profile_photo} userName={postData.user.user_name} />
      <Card.Body>        
        <Button variant="follow" className={`mt-4 ${styles.btnFollowContainer}`}>Follow</Button>
        <Card.Text>
          <div className={`${styles.cardProfileTitle} mt-4`}>
            Software Engineer, Pokemon Master at <strong>Team Rocket</strong>
          </div>
          <ul className="list-unstyled">
            <DescriptionListsItem title="Location" text={postData.user.location} />
            <DescriptionListsItem title="Education" text={postData.user.education} />
            <DescriptionListsItem title="Joined" text={new Date(postData.user.registration_date).toLocaleDateString("en-us",{  year: 'numeric', month: 'long', day: 'numeric' })} />          
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProfileCard;
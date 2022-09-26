import React from 'react';
import { Button, Image } from 'react-bootstrap';
import UserMenu from '../UserMenu/UserMenu';
import defaultAvatar from '../../../../assets/dummy.png';

const UserProfile = ({username, email, photo, handleShowMenu, showMenu}) => {   

  const addDefaultSrc = (ev) => {
    ev.target.src = defaultAvatar;
  }

  return (
    <>
    <Button variant="user-profile" onClick={handleShowMenu}>
      <Image onError={addDefaultSrc} roundedCircle width={38} height={38} src={photo} />             
    </Button>
    {showMenu && <UserMenu username={username} email={email}/>} 
    </>
  )
}

export default UserProfile
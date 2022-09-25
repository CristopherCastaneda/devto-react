import React from 'react';
import { Button, Image } from 'react-bootstrap';
import UserMenu from '../UserMenu/UserMenu';

const UserProfile = ({username, email, photo, handleShowMenu, showMenu}) => {   
  return (
    <>
    <Button variant="user-profile" onClick={handleShowMenu}>
      <Image roundedCircle width={38} height={38} src={photo} />             
    </Button>
    {showMenu && <UserMenu username={username} email={email}/>} 
    </>
  )
}

export default UserProfile
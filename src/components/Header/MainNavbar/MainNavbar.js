import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import SearchBox from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';
import styles from "./MainNavbar.module.scss";
import Button from 'react-bootstrap/Button';
import Notification from './Notification/Notification';
import UserProfile from './UserProfile/UserProfile';
import { useLogedUser } from '../../../context/UserContext';

const MainNavbar = ({ handleShow, handleShowSearch, showSearch, showMenu, handleShowMenu}) => {  
  const { user } = useLogedUser();    
  return (
    <Navbar>
      <Container className="d-flex justify-content-between align-items-center">
        <div className='logo d-flex align-items-center'>
            <Button variant="hamburger" onClick={handleShow} className="d-inline-block d-md-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aonl8imamdoklwc0tz1ajg2ds3dybvot" className="crayons-icon">
                    <title id="aonl8imamdoklwc0tz1ajg2ds3dybvot">Navigation menu</title>
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                </svg>
            </Button>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" className="img-fluid" width="50" heigth="40" />         
                </Link>
            </Navbar.Brand>
            <div className='d-none d-md-flex '>
                <SearchBox />
            </div>            
        </div>
        <div className='user d-flex align-items-center gap-2 gap-md-3'>
            <div className="d-inline-block d-md-none">
                <Button variant="mobile-search" onClick={handleShowSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                        <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                        </path>
                    </svg>
                </Button> 
                {showSearch && <div className={styles.mobileSearch}><SearchBox /></div>}
            </div>                       
            {!user ? <Link to="/login" className={`btn ${styles.btnLogin} d-none d-md-block`}>Log in</Link> : ""}
            {!user ? <Link to="/create-account" className={`${styles.btnCreateAccount} d-none d-md-block`} >Create Account</Link> : ""}
            {user ? <Link to="/create-post" className={`${styles.btnCreatePost} d-none d-md-block me-2`}>Create a Post</Link> :"" }
            {user ? <Notification /> : "" }
            {user ? <UserProfile username={user?.user_name} email={user?.email} photo={user?.profile_photo} handleShowMenu={handleShowMenu} showMenu={showMenu}/> : ""}
        </div>        
      </Container>
    </Navbar>
  )
}

export default MainNavbar
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import SearchBox from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';
import styles from "./MainNavbar.module.scss";
import { useLogedUser } from '../../../context/UserContext';
import CloseButton from 'react-bootstrap/CloseButton';

const MainNavbarCreatePost = () => { 
    
  const { user } = useLogedUser();    
  return (
    <Navbar>
      <Container className="d-flex justify-content-between align-items-center">
        <div className='logo d-flex align-items-center'>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" className="img-fluid d-none d-md-flex" width="50" heigth="40" />         
                </Link>
            </Navbar.Brand>
            <div className='d-md-flex '>
                <h2>Create Post</h2>
            </div>            
        </div>
        <div className='user d-flex align-items-center gap-2 gap-md-3'>
            <div className="d-inline-block d-md-none">

            </div> 
            <div className={`btn ${styles.edit} d-md-block`}>Edit</div>                      
            <div className={`btn ${styles.edit} d-md-block`}>Preview</div>
            <Link to="/">
            <CloseButton/>
            </Link>
        </div>        
      </Container>
    </Navbar>
  )
}

export default MainNavbarCreatePost
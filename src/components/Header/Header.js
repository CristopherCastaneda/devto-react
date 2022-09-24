import React, { useState} from 'react';
import styles from "./Header.module.scss";
import MainNavbar from './MainNavbar/MainNavbar';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowSearch = () => setShowSearch(!showSearch);

    return (
        <header className={`${styles.header}`}>
            <MainNavbar handleShow={handleShow} handleShowSearch={handleShowSearch} showSearch={showSearch}/>
            <MobileMenu show={show} handleClose={handleClose}/>
        </header>
    )
}

export default Header
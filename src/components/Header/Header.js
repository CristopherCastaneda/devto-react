import React, { useState} from 'react';
import styles from "./Header.module.scss";
import MainNavbar from './MainNavbar/MainNavbar';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowSearch = () => setShowSearch(!showSearch);
    const handleShowMenu = () => setShowMenu(!showMenu);

    return (
        <header className={`${styles.header}`}>
            <MainNavbar handleShow={handleShow} handleShowSearch={handleShowSearch} showSearch={showSearch} showMenu={showMenu} handleShowMenu={handleShowMenu}/>
            <MobileMenu show={show} handleClose={handleClose}/>
        </header>
    )
}

export default Header
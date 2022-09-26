<<<<<<< HEAD
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
=======
import React from 'react';
import LoginBotton from "./LoginBotton/LoginBotton"
import MenuBotton from "./MenuBotton/MenuBotton"
import CreateAccountBotton from "./CreateAccountBotton/CreateAccountBotton";
import styles from "./Header.module.scss"
import LogoSearchbox from './Logo&Searchbox/Logo&Searchbox';


const Header = () => {
    return (
        <header className={`dev-${styles.header}`}>
            <nav className={`${styles.navbar}`}>
                <div className='container align-items-center'>
                    <LogoSearchbox/>
                    <MenuBotton />
                    <LoginBotton />
                    <CreateAccountBotton />
                </div>
            </nav>
>>>>>>> main
        </header>
    )
}

export default Header
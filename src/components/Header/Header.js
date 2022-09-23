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
        </header>
    )
}

export default Header
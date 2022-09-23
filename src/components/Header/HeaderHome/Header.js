import React from 'react';
import styles from "./Header.module.scss"
import LogoSearchbox from './Logo&Searchbox/Logo&Searchbox';



const Header = () => {
    return (
        <header className={`dev-${styles.header}`}>
            <nav className={`${styles.navbar}`}>
                <div className='container align-items-center'>
                    <LogoSearchbox/>      
                </div>
            </nav>
        </header>
    )
}

export default Header
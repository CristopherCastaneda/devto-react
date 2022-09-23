import React from "react"
import CreateAccountBotton from "../BottonsRight/CreateAccountBotton/CreateAccountBotton"
import LoginButton from "../BottonsRight/LoginButton/LoginButton"
import Logo from "../Logo/Logo"
import MenuBotton from "../MenuBotton/MenuBotton"
import SearchBox from "../SearchBox/SearchBox"
import styles from "./Logo&Searchbox.module.scss"



const LogoSearchbox=()=>{
    return(
        <div className={`${styles.logo} d-flex align-items-center`}>
            <MenuBotton/>
            <Logo/>
            <SearchBox/>
            <LoginButton/>
            <CreateAccountBotton/>
        </div>
    )
}

export default LogoSearchbox
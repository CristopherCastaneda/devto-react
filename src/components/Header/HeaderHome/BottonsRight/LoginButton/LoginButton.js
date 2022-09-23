import React from "react"
import styles from "../LoginButton/LoginButton.module.scss"

const LoginButton = () => {


    return (
        <div className= {`${styles.userLogin} d-flex align-items-center`} >
            <a href="./login.html" className="d-none d-md-block btn-login me-3 ">Log in</a>
        </div>
    )
}

export default LoginButton
import React from "react"
import styles from "./LoginBotton.module.scss"

const LoginBotton = () => {

    return (
        <div className= {`${styles.userLogin} d-flex align-items-center`} >
            <a href="./login.html" class="d-none d-md-block btn-login me-3 ">Log in</a>
        </div>
    )
}

export default LoginBotton
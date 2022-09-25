import React from "react"
import styles from "../LoginButton/LoginButton.module.scss"
import { Link } from 'react-router-dom';

const LoginButton = () => {


    return (
        <div className= {`${styles.userLogin} d-flex align-items-center`} >
            <Link to="/login"  className="d-none d-md-block btn-login me-3 ">Log in</Link>
        </div>
    )
}

export default LoginButton
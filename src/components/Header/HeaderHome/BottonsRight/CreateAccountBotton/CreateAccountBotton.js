import React from "react"
import { Link } from 'react-router-dom';
const CreateAccountBotton = () => {
    return (
        <div className="user-login d-flex align-items-center">
            <Link to="/CreateAccount" className="d-none d-md-block btn-create-post mr-5">Create Account</Link>
        </div>
    )
}

export default CreateAccountBotton
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styles from "./LoginForm.module.scss";
import SocialButtons from './SocialButtons/SocialButtons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLogedUser } from "../../context/UserContext";
import Alert from 'react-bootstrap/Alert';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {login} = useLogedUser()
    let navigate = useNavigate(); 

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const result = await login(email, password);
        if (!result)
            setError("Something wrong happened!");
        else{
            setError(null);
            navigate("/");            
        }
    }
   
  return (
    <>
    {error && <Alert key="error" variant="danger">{error}</Alert>}
    <section className={styles.formLogin}>
        <div className="login">
            <div className="login_content">
                <h1 className="login_title">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p className="login_description">
                    <Link to="/">DEV Community 👩‍💻👨‍💻 </Link> is a community of 900,148 amazing developers
                </p>
                <SocialButtons />
                <span className='d-block mt-3 text-center'> Have a password? Continue with your email address. </span>
                <div className="mt-3">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={email} onChange={changeEmail} placeholder="example@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" defaultValue={password} onChange={changePassword} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Continue
                        </Button>
                    </Form>
                    <p className={`${styles.forgotPassword} mt-4 text-center`}>I forgot my password</p>
                </div>
            </div>   
        </div>            
    </section>
    </>
  )
}

export default LoginForm
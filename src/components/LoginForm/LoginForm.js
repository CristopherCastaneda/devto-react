import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styles from "./LoginForm.module.scss";
import SocialButtons from './SocialButtons/SocialButtons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate(); 

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{            
            const data = {
                email: email,
                password: password
              };
            
              // Fetch
              const response = await fetch(`https://devto-backend-nine.vercel.app/auth`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              });
            
              const jsonData = await response.json();
            
              if(!jsonData.success) {
                alert("Ingresaste mal tus datos")
              } else {
                localStorage.setItem("token", jsonData.data.token);
                navigate("/");
              }
            
        }
        catch(error){
            console.log(error);
        }  
    };

  return (
    <section className={styles.formLogin}>
        <div className="registration crayons-card">
            <div className="registration_content">
                <h1 className="registration_title">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p className="registration_description">
                    <Link to="/" className="c-link c-link--branded">DEV Community 👩‍💻👨‍💻 </Link> is a community of 900,148 amazing developers
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
                    <p class={`${styles.forgotPassword} mt-4 text-center`}>I forgot my password</p>
                </div>
            </div>   
        </div>            
    </section>
  )
}

export default LoginForm
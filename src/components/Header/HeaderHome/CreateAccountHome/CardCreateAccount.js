import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CardCreateAccount.module.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SocialButtons from '../LoginForm/SocialButtons/SocialButtons';

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [Location, setLocation] = useState("");
    const [Education, setEducation] = useState("");
    const [Description, setDescription] = useState("");
    let navigate = useNavigate();

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const changeName = (e) => {
        setName(e.target.value);
    };
    const changeLocation = (e) => {
        setLocation(e.target.value);
    };
    const changeEducation = (e) => {
        setEducation(e.target.value);
    };
    const changeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: name,
                Location: Location,
                Education: Education,
                email: email,
                password: password,
                Description: Description,
            };
            // Fetch
            const response = await fetch(`https://devto-backend-nine.vercel.app/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const jsonData = await response.json();

            if (!jsonData.success) {
                alert("You entered your data wrong");
            } else {
                localStorage.setItem("token", jsonData.data.token);
                navigate = "/";
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles.CreateAccount}>
            <div className="registration crayons-card">
                <div className="registration_content">
                    <h1 className="registration_title">Welcome to DEV Community 👩‍💻👨‍💻</h1>
                    <p className="registration_description">
                        <Link to="/" className="c-link c-link--branded">DEV Community 👩‍💻👨‍💻 </Link> is a community of 900,148 amazing developers
                    </p>
                    <SocialButtons />
                    <span> Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link> </span>
                    <div className="mt-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={name} onChange={changeName} placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" defaultValue={Location} onChange={changeLocation} placeholder="Country" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEducation">
                                <Form.Label>Education</Form.Label>
                                <Form.Control type="text" defaultValue={Education} onChange={changeEducation} placeholder="City" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue={email} onChange={changeEmail} placeholder="example@email.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" defaultValue={password} onChange={changePassword} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescriptionFY">
                                <Form.Label>Description For You</Form.Label>
                                <Form.Control type="text" defaultValue={Description} onChange={changeDescription} placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateAccount
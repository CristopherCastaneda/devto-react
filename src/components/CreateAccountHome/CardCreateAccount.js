import React, { useState,  useRef  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CardCreateAccount.module.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SocialButtons from '../SocialButtons/SocialButtons';
import storage  from "../../services/firebaseService";
import { Image } from 'react-bootstrap';
import 'firebase/storage';
import { useLogedUser } from "../../context/UserContext";
import Alert from 'react-bootstrap/Alert';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreateAccount = () => {
       
    const refer = useRef(null);
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [education, setEducation] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    let navigate = useNavigate(); 

    const {login} = useLogedUser();
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

    const handleClick = () => {
        if (refer) {
            refer.current.click();
        }
    };

    const handleUpload = async (event) => {
           
        const uploadedFile = event?.target.files[0];
        if (!uploadedFile) return;
    
        const name = +new Date() + "-" + uploadedFile.name;
        
        const storageRef = ref(storage, name);
        uploadBytes(storageRef, uploadedFile).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setPhoto(url);
            });
          });       
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                user_name: name,
                location: location,
                education: education,
                registration_date: new Date(),
                email: email,
                password: password,
                description: description,
                savedPost: [],
                profile_photo: photo || "https://picsum.photos/40/40"
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
            console.log(jsonData)
            if (!jsonData.success) {
                alert("you entered your data wrong");
            } else {
               //log user
               const result = await login(email, password);
               if (!result)
                    setError("Something wrong happened!");
                else{
                    setError(null);
                    navigate("/");            
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        {error && <Alert key="error" variant="danger">{error}</Alert>}
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
                                <Form.Control type="text" defaultValue={location} onChange={changeLocation} placeholder="Country" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEducation">
                                <Form.Label>Education</Form.Label>
                                <Form.Control type="text" defaultValue={education} onChange={changeEducation} placeholder="city" />
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
                                <Form.Control type="text" defaultValue={description} onChange={changeDescription} placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <div className="me-2">
                                {photo && <Image src={photo} roundedCircle width="40" height="40" />}
                            </div>
                            <input type="file" hidden ref={refer} onChange={handleUpload} />
                            <Button variant="photo" onClick={() => handleClick()}>
                                Add a profile photo
                            </Button>
                            <Button variant="save" className={styles.saveButton} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CreateAccount
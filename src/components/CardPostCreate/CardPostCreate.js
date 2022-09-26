import React, { useState,  useRef  } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import styles from "../CardPostCreate/CardPostCreate.module.scss"
import Tagify from "./tagify/tagify"
import QuillEditor from "./Toobar/Toolbar";
import storage  from "../../services/firebaseService";
import { Button, Image } from 'react-bootstrap';
import 'firebase/storage';
import { useLogedUser } from "../../context/UserContext";
import Alert from 'react-bootstrap/Alert';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getUserPost } from '../../helpers/userHelper';


const PostCreate = () => {

    const { user } = useLogedUser(); 

    const refer = useRef(null);
    const [photo, setPhoto] = useState("");
    const [tags, setTags] = useState('[]');
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({  
        title: "",
        body: "",
      });

    let navigate = useNavigate();     

    const changeTags = (e) => {
        setTags(e.detail.value);
    }

    const handleChange = (e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value });

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
        if(!user) return;
        const { userData, token } = getUserPost(user);
        console.log(tags)
        let arrTags = JSON.parse(tags).map(t => t.value);   
            
        try {
            const newPost = {
                post_title: formData.title,
                post_body: formData.postBody,
                post_banner: photo,
                post_date: new Date(),
                tags: arrTags,            
                read_time: formData.postTimeToRead,
                user: userData              

            }   
            // Fetch
            const response = await fetch(`https://devto-backend-nine.vercel.app/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newPost)
            });

            const jsonData = await response.json();
            console.log(jsonData)
            if (!jsonData.success) {
                setError("Something went wrong");
            } else {
                navigate(`/detail/${jsonData.data.post._id}`); 
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    const handleQuill = (e) => {
        setFormData({
          ...formData,
          postBody: e,
          postTimeToRead: Math.ceil(e.length / 150),
        });
      };

    return (
        <>
        {error && <Alert key="error" variant="danger">{error}</Alert>}
            <div classNameName="col-12 col-md-11 col-lg-8">
                <div className={styles.postEditor}>
                    <div className={`${styles.postEditorTitle} container p-3`}>
                        <div className="d-flex align-items-center mb-4">
                            <div className="me-2">
                                {photo && <Image src={photo} />}
                            </div>
                            <input type="file" accept="image/*" hidden ref={refer} onChange={handleUpload} />
                            <Button variant="photo" onClick={() => handleClick()}>
                                Add a cover photo
                            </Button>
                        </div>
                        <input type="text" className={`${styles.postEditorTitle } mb-3`} placeholder="New post title here..." onChange={handleChange} name="title" value={formData.title} />
                        <Tagify className={styles.tagifyContainer} changeTags={changeTags} tags={tags}/> 

                        <QuillEditor
                            name="postBody"
                            value={formData.postBody}
                            placeholder="Write your post content here.."
                            onChange={handleQuill}
                        />
                    </div>
                </div>
                <div className="result">

                </div>
                <div className="d-flex mt-3 align-items-center">
                    <Button onClick={handleSubmit} type="button"  className="me-2">Save Changes</Button>
                    <button type="button" className="btn btn-header-post me-2"><svg className="crayons-icon c-btn__icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">

                        </path>
                    </svg><span className="hidden s:inline"></span></button>
                </div>
            </div>
        </>
    )
}

export default PostCreate
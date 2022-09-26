import React, { useState,  useRef  } from 'react';
import { json, Link, useNavigate, useParams } from 'react-router-dom';
import styles from  "../CardPostCreate/CardPostCreate.module.scss"
import Tagify from "./tagify/tagify"
import QuillEditor from "./Toobar/Toolbar";
import storage  from "../../services/firebaseService";
import { Button, Image } from 'react-bootstrap';
import 'firebase/storage';
import { useLogedUser } from "../../context/UserContext";
import Alert from 'react-bootstrap/Alert';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getUserPost } from '../../helpers/userHelper';

const PostCreate = ({post = {}, type }) => {  
    
    const { _id="", post_banner = "", post_title = "", post_body= "", tags=[], read_time = 1 } = post;

    const { user } = useLogedUser(); 
    let initialArrayTags = JSON.stringify(tags.map((cv) => ({"value" : cv})));
    const refer = useRef(null);
    const [photo, setPhoto] = useState(post_banner);
    const [tagsPost, setTags] = useState(initialArrayTags);
    const [errorPost, setErrorPost] = useState(null);
    const [formData, setFormData] = useState({ post_title, post_body, read_time});
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
        console.log(tagsPost)
        let arrTags = JSON.parse(tagsPost).map(t => t.value); 
        
        if(type = "post"){
            
            try {
                const newPost = {
                    post_title: formData.post_title,
                    post_body: formData.post_body,
                    post_banner: photo,
                    post_date: new Date(),
                    tags: arrTags,            
                    read_time: formData.read_time,
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
                
                if (!jsonData.success) {
                    setErrorPost("Something went wrong");
                } else {
                    navigate(`/detail/${jsonData.data.post._id}`); 
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        if(type = "put"){
           //Create post object
           const updatedPost = {
                post_title: formData.post_title,
                post_body: formData.post_body,
                post_banner: photo,
                tags: arrTags,            
                read_time: formData.read_time                

            }   
            //Save Post
            const responsePost = await fetch(`https://devto-backend-nine.vercel.app/posts/${_id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(updatedPost)
            });
        
            const post = await responsePost.json();
                
                if (!post.success) {
                    setErrorPost("Something went wrong");
                } else {
                    navigate(`/detail/${_id}`); 
                } 

        }

    };
    const handleQuill = (e) => {
        setFormData({
          ...formData,
          post_body: e,
          read_time: Math.ceil(e.length / 150),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                Tagify:"",
                Location: Location,

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
                alert("you entered your data wrong");
            } else {
                localStorage.setItem("token", jsonData.data.token);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <>
        {errorPost && <Alert key="error" variant="danger">{errorPost}</Alert>}            
            <div className="card post-editor">
                <div className="p-3">
                    <div className="d-flex align-items-center mb-4">
                        <div className="me-2">
                            {photo && <Image src={photo} />}
                        </div>
                        <input type="file" accept="image/*" hidden ref={refer} onChange={handleUpload} />
                        <Button variant="photo" className={styles.btnCover} onClick={() => handleClick()}>
                            Add a cover photo
                        </Button>
                    </div>
                    <input type="text" className="post-editor-title mb-3 w-100 border-0 fs-2 fw-bold" placeholder="New post title here..." onChange={handleChange} name="post_title" value={formData.post_title} />
                    <Tagify changeTags={changeTags} value={initialArrayTags} tags={tagsPost}/> 
                </div>
                <div className='w-100' >
                    <QuillEditor
                        name="postBody"
                        value={formData.post_body}
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
        </>
    )
}

export default PostCreate
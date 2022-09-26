import React, { useState } from "react"
import styles from "../CardPostCreate/CardPostCreate.module.scss"
import Tagify from "./tagify/tagify"
import Form from 'react-bootstrap/Form';
import QuillEditor from "./Toobar/Toolbar";


// import QuillEditor from "./Toobar/Toobar"

const PostCreate = () => {

    const [formData, setFormData] = useState({
        postAuthor: "",
        postImage: "",
        postTitle: "",
        postBody: "",
    });

    const handleQuill = (e) => {
        setFormData({
            ...formData,
            postBody: e,
            postTimeToRead: Math.ceil(e.length / 150),
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
            <div classNameName="col-12 col-md-11 col-lg-8">
                <div className={styles.postEditor}>
                    <div className={`${styles.postEditorTitle} container p-3`}>
                        <div className="d-flex align-items-center mb-4">
                            <div className={`${styles.imagePreviewContainer} me-2`}>
                                <img src="" id="preview-image" alt="" className="img-responsive img-cover-preview" />
                            </div>
                            <label className={`btn ${styles.btnCoverPost}`}>Add a cover image</label>
                            <input id="post-editor-cover" type="file" accept="image/*" className="d-none" data-max-file-size-mb="25" />
                        </div>
                        <input type="text" className={`${styles.postEditorTitle} mb-3`} placeholder="New post title here..." />
                        <Tagify />

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
                    <Form onSubmit={handleSubmit}></Form>
                    <button type="button" id="editPostBtn" className="btn btn-primary btn-publish-post me-2">Save Changes</button>
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
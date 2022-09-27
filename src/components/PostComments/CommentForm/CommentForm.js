import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { usePost } from '../../../context/PostContext';
import { useLogedUser } from '../../../context/UserContext';
import styles from "./CommentForm.module.scss";

const CommentForm = () => {  

    const { postData } = usePost();    
    let navigate = useNavigate();  
    const [comment, setComment] = useState("");
    const [display, setDisplay] = useState("d-none");        
    let token = localStorage.getItem("token") || "";
    
    token = JSON.parse(token);

    const changeComment = (e) => {
        setComment(e.target.value);
    };

    const changeDisplay = (e) => {
        setDisplay("");
    }

    function getRandomName(){
        const names =[    
            "Ferndinand Bracho",    
            "Cristopher Castañeda",
            "Mariana Rechy",
            "Alfredo Pizaña",
            "Brisa Hernandez",
            "Sofy Arreguin",
            "Ángel Reséndiz",
        ]
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];    
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try{
            const newComment = {
                author : getRandomName(),
                content: comment,
                date: new Date().toLocaleDateString()        
            }  
            postData.comments.push(newComment);      
            const response = await fetch(`https://devto-backend-nine.vercel.app/posts/${postData._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.token}`
                },
                body: JSON.stringify({comments: postData.comments })
            });
            
            const posts = await response.json();

            setTimeout(
                function(){
                    navigate(`/detail/${postData._id}`);
                },
             1500);
            
        }
        catch(error){
            console.log(error);
        }  
    };
  
  return (
    <div className="comments-container d-flex align-items-start gap-2">
        <div className={`${styles.commentsAvatar} rounded-circle`}>
            <img src="https://picsum.photos/id/237/40/40" />
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formCommentArea} tabindex="0">
                <textarea onClick={changeDisplay} placeholder="Add to the discussion" className="form-control" aria-label="Add a comment to the discussion"
                id="comment" name="comment" value={comment} onChange={changeComment}>
                </textarea>
                <div className={`${display} d-flex gap-2 justify-content-between align-items-center px-2`}>
                      <div className={`${styles.formButtonsToolbar} d-flex align-items-center`}>
                          <Button type="button" variant="upload">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
                                  <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z">
                                  </path>
                              </svg>
                              <span>Upload image</span>
                          </Button>
                          <Button type="button" variant="upload">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
                                  <path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z">
                                  </path>
                              </svg>
                              <span>Templates</span>
                          </Button>
                      </div>
                      <Button type="button"  variant="upload">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="a719kqxeiwm2ywzwnm985y3gfefx3v8p">
                              <title id="a719kqxeiwm2ywzwnm985y3gfefx3v8p">Editor guide</title>
                              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="">
                              </path>
                          </svg>
                      </Button>
                  </div>                 
            </div>
            <div className={`${display} mt-3 ${styles.formButtons}`}>
                <Button type="submit" variant="save-comment" disabled="">Submit</Button>
                <Button type="button" variant="preview" disabled="">Preview</Button>
            </div>
        </form>
    </div>
  )
}

export default CommentForm
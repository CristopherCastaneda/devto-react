import React from 'react';
import { Button } from 'react-bootstrap';
import CommentForm from './CommentForm/CommentForm';
import Comment from './Comment/Comment';
import styles from "./PostComments.module.scss";
import { usePost } from '../../context/PostContext';
import { useLogedUser } from '../../context/UserContext';

const PostComments = () => {

  const { postData  } = usePost(); 
  const { user } = useLogedUser();
    
  return (
    <section className="card mb-4 p-3 p-md-5 border border-top-0">
          <div className="d-flex justify-content-between align-items-center mb-3">
              <h2> Discussion ({postData.comments.length})</h2>

              <div className={styles.commentSubscription}>
                  <Button type='button' variant="light">Subscribe</Button>
              </div>
          </div>
          {user && <CommentForm /> } 
          <div id="all-comments-container">
            {postData.comments.map(({author, content, date}) => {            
                return <Comment author={author} content={content} date={new Date(date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric' })}/>
            })}  
          </div>        
    </section>
  )
}

export default PostComments
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLogedUser } from '../../../context/UserContext';
import { getUserPost } from '../../../helpers/userHelper';
import styles from './ManagePostButtons.module.scss';

const ManagePostButtons = ({postId}) => {

  const { user } = useLogedUser(); 
  let [ error, setError ] = useState(null);
  let navigate = useNavigate();   
  
  const deletePost = async () =>{
    const confirmBox = window.confirm(
      "Are you sure you want to delete this article?\n You cannot undo this action"
    )
    if (confirmBox === true) {
      try {
        if(!user) return;
        const { token } = getUserPost(user);

        const response = await fetch(`https://devto-backend-nine.vercel.app/posts/${postId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const posts = await response.json();
        if (!posts.success) {
          setError("Something went wrong");
        } else {
            navigate(`/`); 
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={`${styles.manageButtons}`}>
        <Link to={`/edit/${postId}`} className="btn px-3">Edit</Link>
        <Button variant='danger' onClick={deletePost} type="button" className={`${styles.btnDeletePost} px-2`}>Delete</Button>
        <Button variant="stat" className={styles.stat}>stat</Button>
    </div>
  )
}

export default ManagePostButtons
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { usePost } from '../../context/PostContext';
import { useLogedUser } from '../../context/UserContext';
import CardPostsListingTags from '../CardPostsListing/CardPostsListingTags/CardPostsListingTags';
import styles from './DetailPost.module.scss';
import ManagePostButtons from './ManagePostButtons/ManagePostButtons';
import defaultAvatar from '../../assets/dummy.png';

const DetailPost = () => {

  const { postData  } = usePost();
  let { user } = useLogedUser(); 
  let showManageButtons = false;

  if(user && postData){
    user = JSON.parse(user)
    if(user._id == postData.user._id)
        showManageButtons = true
  }
  
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultAvatar;
  }
 
  return (
      <Card>
          {postData.post_banner && <Card.Img variant="top" src={postData.post_banner} />}
          <Card.Body className="p-3 p-md-5" >
              <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center mb-3">
                      <div className="main-profile">
                          <Image onError={addDefaultSrc} roundedCircle width="40" height="40" src={postData.user.profile_photo} />
                      </div>
                      <div className="mx-2">
                          <p className={styles.userName}>{postData.user.user_name}</p>
                          <p className={`${styles.postDate} m-0`}>{new Date(postData.post_date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric' })}</p>
                      </div>
                  </div>
                {showManageButtons && <ManagePostButtons postId={postData._id} />}
              </div>
              <h1>{postData.post_title}</h1>
              <Card.Subtitle className="mb-2 text-muted d-flex gap-3">                 
                    {postData.tags.map((tag) => {
                        return <CardPostsListingTags tag={tag}/>
                    })}                
              </Card.Subtitle>
             <Card.Text className={`${styles.cardText} mt-5`}
                    dangerouslySetInnerHTML={{__html: postData.post_body}}>
              </Card.Text>              
          </Card.Body>
      </Card>
  )
}

export default DetailPost;
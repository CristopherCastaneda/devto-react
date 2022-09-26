import React from 'react';
import { Card, Image } from 'react-bootstrap';
import CardPostsListingTags from '../../CardPostsListing/CardPostsListingTags/CardPostsListingTags';
import styles from './PostCard.module.scss';
import {Link} from "react-router-dom"
import PostCardFooter from '../PostCardFooter/PostCardFooter';

const PostCard = ({post, postBanner}) => {

const postData = post
  
  return (
    postData &&
      <Card className="p-2 p-md-3 mt-3" > 
        {postBanner && 
        <Card.Img variant="top" src={postData.post_banner}/>}
          <Card.Body className="p-0">
              <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center mb-3">
                      <div className="main-profile">
                          <Image roundedCircle width="40" height="40" src={postData.user.profile_photo} />
                      </div>
                      <div className="mx-2">
                          <p className={`${styles.userName} mb-0`}>{postData.user.user_name}</p>
                          <p className={`${styles.postDate} m-0`}>{new Date(postData.post_date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric' })}</p>
                      </div>
                  </div>
              </div>
              <h2 className="ms-4"><Link to={`/detail/${postData._id}`}> {postData.post_title}</Link></h2>
              <Card.Subtitle className="mb-2 text-muted d-flex gap-3 ms-4">                 
                    {postData.tags.map((tag) => {
                        return <CardPostsListingTags tag={tag}/>
                    })}                
              </Card.Subtitle>
              <PostCardFooter readTime={postData.read_time} nCommets={postData.comments.length} id={postData._id} />
          </Card.Body>
      </Card>
  )
}

export default PostCard;
import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import PostCard from "../PostCard/PostCard";

const CardList = () => {
   
    let posts = []
    const { data, error } = useFetch(`https://devto-backend-nine.vercel.app/posts`);
  
    if(data)
        posts = data.data.posts;    
    
    return(
    <>
        {posts.map((post, index) => {
            const {_id, user, tags, comments } = post;
            let showPostBanner= index ===0 
            return (
                <PostCard post= {post} key={_id} postBanner={showPostBanner} nComments={comments.length}
                />
            );
        })}
    </>
    )
};

export default CardList; 

                {/*


if('comments' in post){            
            for(comment in post.comments)
            {
                countComments++;
            }
        }

                    id={_id
                    key={_id}
                    userDescription= {user.descrption}
                    userName={user.user_name}
                    userPhoto={user.profile_photo}
                    postBody={post.post_body}
                    postDate={post.post_date}
                    postTitle={post.post_title} 
                    postBanner={postBanner}
                    tags={[tags]}
                    readTime={post.read_time}
                    nComments={comments.length}
                */}
import React, { useEffect, useState } from "react";
import MainCard from "../MainCard/MainCard";

const CardList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://devto-backend-nine.vercel.app/posts")
        .then((response) => response.json())
        .then(posts => {
            setPosts(posts.data.posts);
        });
    }, []);

    console.log("post", posts)
    return(
    <div>
        {posts.map((post, index) => {
            const {_id, user, tags, comments } = post;
            let postBanner= index ===0 ? post.post_banner : null;
            console.log("post", post)
            return (
                <MainCard
                    id={_id}
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
                />
            );
        })}
    </div>
    )
};

export default CardList; 

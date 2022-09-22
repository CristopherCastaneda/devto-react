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
        {posts.map((post) => {
            const {_id, user, tags, comments } = post;
            return (
                <MainCard
                    id={_id}
                    key={_id}
                    userDescription= {user.descrption}
                    userPhoto={user.profile_photo}
                    postBody={comments.post_body}
                    postDate={comments.post_date}
                    postTitle={comments.post_title} 
                    postBanner={comments.post_banner}
                    tags={tags}
                />
            );
        })}
    </div>
    )
};

export default CardList; 

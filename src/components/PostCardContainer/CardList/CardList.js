<<<<<<< HEAD:src/components/PostCardContainer/CardList/CardList.js
import React, { useEffect, useState } from "react";
import PostCardHeader from "../PostCardHeader/PostCardHeader";
=======
// import React, { useEffect, useState } from "react";
// import MainCard from "../MainCard/MainCard";
>>>>>>> 2969d6f5fe645f9ce36f74730d46f1a7ac46e208:src/components/CardList/CardList.js

// const CardList = () => {

//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch("https://devto-backend-nine.vercel.app/posts")
//         .then((response) => response.json())
//         .then(posts => {
//             setPosts(posts.data.posts);
//         });
//     }, []);

<<<<<<< HEAD:src/components/PostCardContainer/CardList/CardList.js
    console.log("post", posts)
    return(
    <div>
        {posts.map((post, index) => {
            const {_id, user, tags, comments } = post;
            let postBanner= index ===0 ? post.post_banner : null;
            console.log("post", post)
            return (
                <PostCardHeader 
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
=======
//     console.log("post", posts)
//     return(
//     <div>
//         {posts.map((post, index) => {
//             const {_id, user, tags, comments } = post;
//             let postBanner= index ===0 ? post.post_banner : null;
//             console.log("post", post)
//             return (
//                 <MainCard
//                     id={_id}
//                     key={_id}
//                     userDescription= {user.descrption}
//                     userName={user.user_name}
//                     userPhoto={user.profile_photo}
//                     postBody={post.post_body}
//                     postDate={post.post_date}
//                     postTitle={post.post_title} 
//                     postBanner={postBanner}
//                     tags={[tags]}
//                     readTime={post.read_time}
//                     nComments={comments.length}
//                 />
//             );
//         })}
//     </div>
//     )
// };
>>>>>>> 2969d6f5fe645f9ce36f74730d46f1a7ac46e208:src/components/CardList/CardList.js

// export default CardList; 

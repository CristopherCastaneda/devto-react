import React, { useEffect, useState} from 'react';
import ReadNextListItem from './ReadNextListItem/ReadNextListItem';

const ReadNextList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch("https://devto-backend-nine.vercel.app/posts")
      .then((response) => response.json())
      .then(posts => {            
          setPosts(posts.data.posts);                     
      })
      .catch((error) => {
          console.log("error", error);
      });
  }, []);


  return (
    <section className="card read-all container p-2 p-md-5 mb-4">
        <h2 className="read-title strong">Read next</h2>
        <div id="container-readnext">
          {posts.slice(0,4).map(({post_title, user, post_date, _id}) => {            
            return <ReadNextListItem key={_id} photo={user.profile_photo} id={_id} title={post_title} author={user.user_name} date={new Date(post_date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric' })} />
          })}
        </div>
    </section>
  )
}

export default ReadNextList
import React, { useEffect, useState} from 'react';
import ReadNextListItem from './ReadNextListItem/ReadNextListItem';
import Card from 'react-bootstrap/Card';

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
    <Card className="p-2 p-md-3 mb-4">  
      <Card.Body>
        <Card.Title>Read next</Card.Title>
        <Card.Text>
          {posts.slice(0,4).map(({post_title, user, post_date, _id}) => {            
            return <ReadNextListItem key={_id} photo={user.profile_photo} id={_id} title={post_title} author={user.user_name} date={new Date(post_date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric' })} />
          })}
        </Card.Text>  
      </Card.Body>
    </Card>
  )
}

export default ReadNextList
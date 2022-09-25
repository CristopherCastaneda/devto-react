import React from 'react';
import ReadNextListItem from './ReadNextListItem/ReadNextListItem';
import Card from 'react-bootstrap/Card';
import useFetch from '../../hooks/useFetch';

const ReadNextList = () => {
  let posts = null;
  const { data, error } = useFetch(`https://devto-backend-nine.vercel.app/posts`);
  
  if(!data) return (<div>No hay data</div>)   

  posts = data.data.posts;
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
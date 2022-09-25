import React from "react";
import Card from "react-bootstrap/Card";
import PostCardBody from "../PostCardBody/PostCardBody";
import styles from "./PostCardHeader.module.scss"
import Image from 'react-bootstrap/Image'


function PostCardHeader({ postBanner, userName, postDate, userPhoto, postTitle, tags, readTime, nComments, id}) {
  return (
    <div>
      hola
      <PostCardBody postTitle={postTitle} tags={tags} readTime={readTime} nComments={nComments} id={id}/>
    </div>
    
    
      
    
  );
}

export default PostCardHeader;

/*
function PostCardHeader() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />

<Card.Text className="p-1 mg-1">
            UserName
          </Card.Text>
          <Card.Text className="p-1 mg-1">
            Date
          </Card.Text>

export default PostCardHeader; */

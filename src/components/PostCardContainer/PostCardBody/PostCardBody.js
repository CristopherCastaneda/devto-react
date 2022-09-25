import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PostCardFooter from "../PostCardFooter/PostCardFooter";
import {Link} from "react-router-dom"
import { Card } from "react-bootstrap";

function PostCardBody({postTitle, tags, readTime, nComments, id}) {
  return (
    <div>
      hola
      <PostCardFooter readTime={readTime} nComments={nComments} id={id}/>
    </div>
    /*
      <h3>
      <Link to={`/detail/${id}`}> {postTitle}</Link>
      </h3>
    <PostCardFooter readTime={readTime} nComments={nComments} id={id}/>
 */
  );
};

export default PostCardBody;

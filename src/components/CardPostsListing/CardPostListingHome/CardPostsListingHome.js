
import { Card, Spinner } from "react-bootstrap";
import CardPostsListItem from "../CardPostsListItem/CardPostsListItem";
import styles from "./CardPostsListingHome.module.scss";
import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const CardPostListingHome = ({title, seeAll}) => {

  let posts = null;
  const { data, error } = useFetch(`https://devto-backend-nine.vercel.app/posts`);
  
  if(!data) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )   

  posts = data.data.posts;
  return (
    <Card className="border m-0 ms-md-2 ms-lg-0 mt-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className={styles.cardPostHeader}>
            {title}
          </Card.Title>
          {seeAll && <span className={styles.seeAll}>See All</span>}
        </div>
        <Card.Text>
          <ul className="list-unstyled">
            {posts.slice(0, 3).map((post, index) => {
              return (
                <CardPostsListItem
                  title={post.post_title}
                  arrTags={post.tags}
                />);
            })}

          </ul>
        </Card.Text>
      </Card.Body>
    </Card>  
    );     
};

export default CardPostListingHome;

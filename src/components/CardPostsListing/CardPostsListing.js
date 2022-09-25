import React from 'react';
import { Card } from 'react-bootstrap';
import CardPostsListItem from './CardPostsListItem/CardPostsListItem';
import styles from "./CardPostsListing.module.scss";
import { usePost } from '../../context/PostContext';

const CardPostsListing = () => {
  const { postData  } = usePost(); 

  return (
    <Card className="border m-0 ms-md-2 ms-lg-0 mt-3">
      <Card.Body>
        <Card.Title className={styles.cardPostHeader}>More from <a href="/#">{postData.user.user_name}</a></Card.Title>
        <Card.Text>
          <ul className="list-unstyled">
            <CardPostsListItem title="Becoming a Better Developer Through Open Source" arrTags={["beginners", "opensource"]} />
            <CardPostsListItem title="That time I could not finish DevTo challenge" arrTags={["kodemia", "html", "css", "react"]} />
            <CardPostsListItem title="What's a fullstack dev anyway?" arrTags={["codenewbie", "koder"]} />
            <CardPostsListItem title="What's the best pokemon ever?" arrTags={["browsers", "discuss"]} />
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

 export default CardPostsListing;

import { Card } from "react-bootstrap";
import CardPostsListItem from "../CardPostsListItem/CardPostsListItem";
import styles from "./CardPostsListingHome.module.scss";
import React, { useEffect, useState } from "react";

const CardPostListingHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://devto-backend-nine.vercel.app/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts.data.posts);
      });
  }, []);

  console.log("post", posts);
  return (
    <div>
      {posts.map((post, index) => {
        const { _id, user, tags, comments } = post;
        let showPostBanner = index === 0;
        console.log("post", post);
        return (
          <Card className="border m-0 ms-md-2 ms-lg-0 mt-3">
            <Card.Body>
              <Card.Title className={styles.cardPostHeader}>
                More from <a href="/#">{post.post_title}</a>
              </Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <CardPostsListItem
                    title="Becoming a Better Developer Through Open Source"
                    arrTags={["beginners", "opensource"]}
                  />
                  <CardPostsListItem
                    title="That time I could not finish DevTo challenge"
                    arrTags={["kodemia", "html", "css", "react"]}
                  />
                  <CardPostsListItem
                    title="What's a fullstack dev anyway?"
                    arrTags={["codenewbie", "koder"]}
                  />
                  <CardPostsListItem
                    title="What's the best pokemon ever?"
                    arrTags={["browsers", "discuss"]}
                  />
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardPostListingHome;

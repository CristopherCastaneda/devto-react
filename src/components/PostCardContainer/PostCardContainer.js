import React from "react";
import PostCardHeader from "./PostCardHeader/PostCardHeader";

function PostCardContainer() {
  return (
      <div className="col-12 col-md-9 col-lg-7">
        <main>
          <div className="container">
          <PostCardHeader/>
          </div>
        </main>
      </div>
  );
};

export default PostCardContainer;

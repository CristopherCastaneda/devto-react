import React from 'react';
import styles from "./CardPostsListingHeader.module.scss";

const CardPostsListingHeader = ({userName}) => {
  return (
      <div className={`${styles.cardPostList} card-header d-flex justify-content-between bg-none`}>
          <h3 className="card-title">More from <a href="/#">{userName}</a></h3>
      </div>
  )
}

export default CardPostsListingHeader
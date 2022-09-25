import React from 'react'
import CardPostsListingTags from '../CardPostsListingTags/CardPostsListingTags'
import styles from "./CardPostsListItem.module.scss";

const CardPostsListItem = ({title, arrTags}) => {

  return (
      <li className={styles.listGroupItem}>
          <a href="/#">
              {title}
          </a>
          <div className="content-tags">  
             {arrTags.map((tag) => {
                return <CardPostsListingTags tag={tag}/>
              })}           
             
          </div>
      </li>
  )
}

export default CardPostsListItem
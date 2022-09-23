import React from 'react';
import styles from "./ReadNextListItem.module.scss";

const ReadNextListItem = ({photo, id, title, author, date}) => {
  return (
      <a href={`detail/${id}`}>
          <div className="d-flex justify-content-start align-items-center read-next-container">
              <div className={`${styles.readNext} rounded-circle`}>
                  <img className='img-fluid' src={photo} />
              </div>
              <div className="read-text p-3">
                  <h3 className="strong">{title}</h3>
                  <p>{author} {date}</p>
              </div>
          </div>
      </a>
  )
}

export default ReadNextListItem
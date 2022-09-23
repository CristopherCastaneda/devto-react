import React from 'react';
import styles from "./ReadNextListItem.module.scss";
import { Link } from 'react-router-dom';

const ReadNextListItem = ({photo, id, title, author, date}) => {
  return (
      <Link to={`detail/${id}`}>
          <div className="d-flex justify-content-start align-items-center read-next-container">
              <div className={`${styles.readNext} rounded-circle`}>
                  <img className='img-fluid' src={photo} />
              </div>
              <div className="read-text p-3">
                  <h3 className="strong">{title}</h3>
                  <p>{author} {date}</p>
              </div>
          </div>
      </Link>
  )
}

export default ReadNextListItem
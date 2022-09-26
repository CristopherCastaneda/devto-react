import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import defaultAvatar from '../../../assets/dummy.png';
import styles from './ReadNextListItem.module.scss';

const ReadNextListItem = ({photo, id, title, author, date}) => {

const addDefaultSrc = (ev) => {
        ev.target.src = defaultAvatar;
}

  return (
      <Link to={`/detail/${id}`} className={styles.ReadNext}>
          <div className="d-flex justify-content-start align-items-center read-next-container">
              <Image onError={addDefaultSrc} roundedCircle width={40} height={40} src={photo}/>
              <div className="read-text p-3">
                  <h3 className="strong">{title}</h3>
                  <p>{author} {date}</p>
              </div>
          </div>
      </Link>
  )
}

export default ReadNextListItem
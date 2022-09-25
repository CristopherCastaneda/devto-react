import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const ReadNextListItem = ({photo, id, title, author, date}) => {
  return (
      <Link to={`/detail/${id}`}>
          <div className="d-flex justify-content-start align-items-center read-next-container">
              <Image roundedCircle width={40} height={40} src={photo}/>
              <div className="read-text p-3">
                  <h3 className="strong">{title}</h3>
                  <p>{author} {date}</p>
              </div>
          </div>
      </Link>
  )
}

export default ReadNextListItem
import React from 'react';
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
      <Link to="/" className='me-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aq9w3ozou4pmtnc15rroryctxmvrbt5k" className="crayons-icon">
              <title id="aq9w3ozou4pmtnc15rroryctxmvrbt5k">Notifications</title>
              <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z">
              </path>
          </svg>
      </Link>
  )
}

export default Notification
import React from 'react'

function HeartReaction() {
  return (
      <div className="reaction d-flex">
          <button className="btn reaction-button-like d-flex gap-2 flex-md-column align-items-center" data-category="like" title="Heart">
              <div id="heart" className="svg-container rounded-circle red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                      <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                      </path>
                  </svg>
              </div>
              <span className="reaction-count">0</span>
          </button>
      </div>
  )
}

export default HeartReaction
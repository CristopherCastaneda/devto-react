import React from 'react'

function SaveReaction() {
  return (
      <div className="reaction d-flex">
          <button className="btn reaction-button-like reaction-button-save d-flex gap-2 flex-md-column align-items-center" data-category="like" title="Save">
              <div id="save" className="svg-container rounded-circle blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                      </path>
                      <path className="path-saved d-none" d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
                  </svg>
              </div>
              <span id="reaction-save" className="reaction-count">0</span>
          </button>
      </div>
  )
}

export default SaveReaction
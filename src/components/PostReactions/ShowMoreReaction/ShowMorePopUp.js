import React from 'react';
import styles from './ShowMorePopUp.module.scss';

function ShowMorePopUp({display}) {
  let displayClass = display ? "" : "d-none";

  const copyURL = () =>{
    navigator.clipboard.writeText(window.location);    
  }

  return (
    <div className={`p-3 m-1 ${displayClass} ${styles.showMoreDropdown}`}>
                <div>
                    <button onClick={copyURL} className="d-flex justify-content-between border-0 bg-transparent p-0 mb-2" data-posturl={window.location}>
                        <span className="fw-bold">Copy link</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="article-copy-icon" role="img" aria-labelledby="anbewtpkbqr2qb0utnwm7uyhh7hj9m6" aria-hidden="true" className="crayons-icon mx-2 shrink-0"><title id="anbewtpkbqr2qb0utnwm7uyhh7hj9m6">Copy link</title>
                            <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                        </svg>
                    </button>
                    <div id="article-copy-link-announcer" className="d-none">
                        <div className="alert alert-success" role="alert">
                            Copied to Clipboard
                        </div>
                    </div>
                </div>

                <div className="show-more-links">
                    <a target="_blank" className="d-block mb-2" rel="noopener" href="#">
                        Share to Twitter
                    </a>
                    <a target="_blank" className="d-block mb-2" rel="noopener" href="#">
                        Share to LinkedIn
                    </a>
                    <a target="_blank" className="d-block mb-2" rel="noopener" href="#">
                        Share to Reddit
                    </a>
                    <a target="_blank" className="d-block mb-2" rel="noopener" href="#">
                        Share to Hacker News
                    </a>
                    <a target="_blank" className="d-block mb-2" rel="noopener" href="#">
                        Share to Facebook
                    </a>
                </div>
                <a href="#" className="d-block">Share Post via...</a>
                <a href="/report-abuse" className="d-block">Report Abuse</a>
            </div>
  )
}

export default ShowMorePopUp;
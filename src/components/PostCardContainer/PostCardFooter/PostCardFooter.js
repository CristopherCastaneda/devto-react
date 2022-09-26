import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import styles from "./PostCardFooter.module.scss"

function PostCardFooter({readTime, nComments, id}) {
  return (
    <div className="mt-3 d-flex justify-content-between ms-0 ms-md-4 flex-wrap align-items-center">
      <div className="d-flex justify-content-between gap-2">
        <div className="d-flex gap-1" >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
          </svg>
          0 <span className="d-none d-md-block"> reactions</span>
        </div>
        <div className="d-flex gap-1">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                </path>
            </svg>
          {nComments}<span className="d-none d-md-block">comments</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className= {`${styles.minRead} "pe-2" `} href="#"> {readTime} min Read</div>
        <Button className={styles.btnSecondary} href="#">Save</Button>
      </div>
    </div>
  );
};

export default PostCardFooter;

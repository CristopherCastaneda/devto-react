import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Comment.module.scss'

const Comment = ({author, date, content}) => {
  return (
    <div class="comments-container d-flex align-items-start mt-3">
            <span className={`${styles.avatar} rounded-circle me-3`}>
                <img src="https://picsum.photos/id/237/40/40" />
            </span>
            <div className={styles.commentContent}>
                <div className={`${styles.comment} p-3`}>
                    <div>
                        <small><strong>{author}</strong><span className="opacity-50"> • {date}</span></small> 
                    </div>
                    {content}
                </div>
                <div className="reactions mt-2">
                    <Button type="button" variant="reaction">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
                            <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                            </path>
                        </svg>
                        <span className="reactions-count">4 <span v="d-none d-md-inline">likes</span></span>
                    </Button>
                    <Button type="button" variant="reaction">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5h4ee11ner0isdenyplmiv9abvxgdvk">
                            <title id="a5h4ee11ner0isdenyplmiv9abvxgdvk">Comment button</title>
                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                            </path>
                        </svg>
                        <span className="reactions-count"><span v="d-none d-md-inline">Reply</span></span>
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default Comment
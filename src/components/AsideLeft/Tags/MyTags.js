import React from "react";
import styles from '../AsideLinks.module.scss';

const MyTags = ()=>{
    return (
        <>
            <h2>My Tags</h2>
            <a href="#" className={`${styles.tagLink}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
              >
                <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </a>
            
        </>
       
    )
};

export default MyTags; 
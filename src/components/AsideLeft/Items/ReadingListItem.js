import React from "react";
import readingIcon from "./icons/reading_list.png";
import styles from '../AsideLinks.module.scss';

const ReadingListItem = ()=>{
    return (
        <div>
           <li className={`${styles.readingListLink}`}>
              <a
                href="/readingList.html"
                className={`${styles.asideNavigationLink} d-flex align-items-center`}
              >
                <span>
                  <img src={readingIcon} alt="" />
                </span>
                Reading List{" "}
                <span className="ms-2 badge bg-secondary text-dark bg-reading"></span>
              </a>
            </li>
        </div>
    )
};

export default ReadingListItem; 
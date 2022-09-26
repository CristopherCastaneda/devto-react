import React from "react";
import videosIcon from "./icons/videos.png";
import styles from '../AsideLinks.module.scss';

const Videos = ()=>{
    return (
        <div>
           <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={videosIcon} alt="" />
                </span>
                Videos
              </a>
            </li>
          </div>
    )
};

export default Videos; 
import React from "react";
import podcastsIcon from "./icons/podcasts.png";
import styles from '../AsideLinks.module.scss';

const PodcastItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={podcastsIcon} alt="" />
                </span>
                Podcasts
              </a>
            </li>
        </div>
    )
};

export default PodcastItem; 
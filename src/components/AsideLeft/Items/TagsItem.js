import React from "react";
import tagsIcon from "./icons/tags.png";
import styles from '../AsideLinks.module.scss';

const TagsItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={tagsIcon} alt="" />
                </span>
                Tags
              </a>
            </li>
        </div>
    )
};

export default TagsItem; 
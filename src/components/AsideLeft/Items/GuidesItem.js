import React from "react";
import guidesIcon from "./icons/guides.png";
import styles from '../AsideLinks.module.scss';

const GuidesItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={guidesIcon} alt="" />
                </span>
                Guides
              </a>
            </li>
        </div>
    )
};

export default GuidesItem; 
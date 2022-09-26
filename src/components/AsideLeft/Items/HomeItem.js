import React from "react";
import homeIcon from "./icons/home.png";
import styles from '../AsideLinks.module.scss';

const HomeItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={homeIcon} alt="" />
                </span>
                Home
              </a>
            </li>
        </div>
    )
};

export default HomeItem; 
import React from "react";
import aboutIcon from "./icons/about.png";
import styles from '../AsideLinks.module.scss';

const AboutItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={aboutIcon} alt="" />
                </span>
                About
              </a>
            </li>
        </div>
    )
};

export default AboutItem; 
import React from "react";
import sponsorsIcon from "./icons/sponsors.png";
import styles from '../AsideLinks.module.scss';

const SponsorsItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={sponsorsIcon} alt="" />
                </span>
                Sponsors
              </a>
            </li>
        </div>
    )
};

export default SponsorsItem; 
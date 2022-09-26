import React from "react";
import codeConductIcon from "./icons/thumb_up.png";
import styles from '../AsideLinks.module.scss';

const CodeConductItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={codeConductIcon} alt="" />
                </span>
                Code of Conduct
              </a>
            </li>
        </div>
    )
};

export default CodeConductItem; 
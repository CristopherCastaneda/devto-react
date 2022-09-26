import React from "react";
import termsUseIcon from "./icons/eyes.png";
import styles from '../AsideLinks.module.scss';

const TermsUse = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={termsUseIcon} alt="" />
                </span>
                Terms of use
              </a>
            </li>
        </div>
    )
};

export default TermsUse; 
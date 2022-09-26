import React from "react";
import faqIcon from "./icons/faq.png";
import styles from '../AsideLinks.module.scss';

const FaqItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={faqIcon} alt="" />
                </span>
                FAQ
              </a>
            </li>
        </div>
    )
};

export default FaqItem; 
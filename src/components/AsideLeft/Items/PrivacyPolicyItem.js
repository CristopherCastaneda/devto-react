import React from "react";
import privacyPolicyIcon from "./icons/policy.png";
import styles from '../AsideLinks.module.scss';

const PrivacyPolicyItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={privacyPolicyIcon} alt="" />
                </span>
                Privacy Policy
              </a>
            </li>
        </div>
    )
};

export default PrivacyPolicyItem; 
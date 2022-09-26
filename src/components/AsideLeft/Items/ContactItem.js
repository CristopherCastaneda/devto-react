import React from "react";
import contactIcon from "./icons/contact.png";
import styles from '../AsideLinks.module.scss';

const ContactItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={contactIcon} alt="" />
                </span>
                Contact
              </a>
            </li>
        </div>
    )
};

export default ContactItem; 
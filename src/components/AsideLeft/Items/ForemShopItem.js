import React from "react";
import shopIcon from "./icons/shop.png";
import styles from '../AsideLinks.module.scss';

const ForemShopItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={shopIcon} alt="" />
                </span>
                Forem Shop
              </a>
            </li>
        </div>
    )
};

export default ForemShopItem; 
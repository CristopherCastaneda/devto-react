import React from "react";
import listingIcon from "./icons/listing.png";
import styles from '../AsideLinks.module.scss';

const ListingsItem = ()=>{
    return (
        <div>
            <li>
              <a href="#" className={`${styles.asideNavigationLink}`}>
                <span>
                  <img src={listingIcon} alt="" />
                </span>
                Listings
              </a>
            </li>
        </div>
    )
};

export default ListingsItem; 
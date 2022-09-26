import React from "react";
import styles from '../AsideLinks.module.scss';

const MyTagsLinks = ()=>{
    return (
        <div>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #devops   
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #opensource
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #career
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #dotnet
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #csharp
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #vscode
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #javascript
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #phyton
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #sql
            </a>
            <a href="#" className={`${styles.asideNavigationLink}`}>
              #git
            </a>
        </div>
    )
};

export default MyTagsLinks; 
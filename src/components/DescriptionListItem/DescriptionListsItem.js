import React from 'react';
import styles from "./DescriptionListItem.module.scss";

const DescriptionListsItem = ({title, text}) => {
  return (
      <li>
          <div className={styles.listTitle}>
              {title}
          </div>
          <div className="value">{text}</div>
      </li>
  )
}

export default DescriptionListsItem
import React from 'react';
import styles from './UserMenu.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteTokenLocalStorage } from '../../../../helpers/userHelper';
import { Link } from 'react-router-dom';

const UserMenu = ({username, email}) => {

  const logout = () => {
    deleteTokenLocalStorage();
    window.location.href = "./"
  }

  return (
    <div className={styles.userMenu}>
        <ListGroup variant="flush">
            <ListGroup.Item className={styles.listItem}>{username}<br /> {email}</ListGroup.Item>
            <ListGroup.Item className={styles.listItem}>Dashboard</ListGroup.Item>
            <ListGroup.Item className={styles.listItem}><Link to="/">Create Post</Link></ListGroup.Item>
            <ListGroup.Item className={styles.listItem}>Reading list</ListGroup.Item>
            <ListGroup.Item className={styles.listItem}>Settings</ListGroup.Item>
            <ListGroup.Item className={styles.listItem} onClick={logout}>Sign Out</ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default UserMenu
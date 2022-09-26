import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ManagePostButtons.module.scss';

const ManagePostButtons = () => {

  return (
    <div class="btnEditPost">
        <Link to={`/edit/`} class="btn px-2">Edit</Link>
        <Button variant='danger' type="button" class={`${styles.btnDeletePost} px-2`}>Delete</Button>
        <Button class="btn px-2">stat</Button>
    </div>
  )
}

export default ManagePostButtons
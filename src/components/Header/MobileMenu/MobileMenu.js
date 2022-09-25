import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MobileMenu = ({show, handleClose}) => {
  return (
    <Offcanvas show={show} onHide={handleClose} className="d-md-none" responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Body
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default MobileMenu;
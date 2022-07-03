import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="fs-5">
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/payment-method" className="nav-link">
                Payment Method
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className="fs-5">
              <Link to="/settings" className="nav-link">
                Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

import React from "react";
import { ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowSideMenu } from "../../pages/system-state/SystemSlice";

export const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);

  return (
    <>
      <Offcanvas
        show={showSideMenu}
        onHide={() => dispatch(toggleShowSideMenu())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/payment-method" className="nav-link">
                Payment Method
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </ListGroup.Item>

            <ListGroup.Item
              className="fs-5"
              onClick={() => dispatch(toggleShowSideMenu())}
            >
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

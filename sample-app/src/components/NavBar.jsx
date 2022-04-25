import React from "react";
import "./styles/navbar.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/Symbl_LARGE_300.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="header">
      <Navbar.Brand>
        <img
          src={logo}
          height="35"
          style={{ paddingLeft: "20px" }}
          className="d-inline-block align-top"
          alt="logo"
        />{" "}
      </Navbar.Brand>
      <div className="header-links">
        <Link className="nav-link" to={"/"}>
          STREAMING
        </Link>
        <Link className="nav-link" to={"/subscribe"}>
          SUBSCRIBE
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;

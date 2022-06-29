import React from "react";
import { Nav, NavMenu, NavLink } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/Services">
            Services
          </NavLink>
          <NavLink to="/Contact">
            Contact
          </NavLink>
          <NavLink to="/Blog">
            Blog
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
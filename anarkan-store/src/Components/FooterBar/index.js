import React from "react";
import { Nav, NavMenu, NavLink } from "./FooterElements";
  
const FooterBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/PayPal">
            PayPal
          </NavLink>
          <NavLink to="/Photos">
            Photos
          </NavLink>
          <NavLink to="/Partners">
            Partners
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default FooterBar;
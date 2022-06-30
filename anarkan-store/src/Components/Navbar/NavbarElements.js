//simport { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: black;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  /*border: 2px solid orange;*/
`;
  
export const NavLink = styled(Link)`
  width: 10%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: cyan;
  /*border: 2px solid cyan;*/
  }
`;
  
export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  /*border: 2px solid yellow;*/
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
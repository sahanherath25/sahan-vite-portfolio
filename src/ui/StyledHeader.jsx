// Import dependencies
import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import breakpoints from "../styles/breakpoints.jsx";
import {FaArrowAltCircleRight} from "react-icons/fa";

// Styled components
const HeaderContainer = styled.div`
  position: relative;
`;

const MenuIcon = styled.div`
  color: orangered;
  font-size: 70px;
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  text-decoration: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 60%;
  background-color: #001220;
  z-index: 3;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.3s;
  

  ${(props) =>
    breakpoints.tabletLandscape &&
    css`
      border-top-left-radius: unset;
      border-bottom-left-radius: 50%;
      height: 100%;
      width: 50%;
      transition: all 0.5s;
    `}
`;

const MenuItem = styled.li`
  color: whitesmoke;
  text-decoration: none;
  margin-block-start: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;

  a {
    color: whitesmoke;
    text-decoration: none;
  }

  &.active {
    border: 2px solid cyan;
    padding: 10px;
    color: cyan;
    border-radius: 10px;

    a {
      color: cyan;
      font-weight: bold;
    }
  }
`;



const StyledHeader = () => {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;

  console.log("Path ", path);

  const closeHeader=()=>{

      setShowHeader(false)
  }

  return (
      <HeaderContainer >
          {showHeader ? (
              <MenuIcon onClick={() => setShowHeader(!showHeader)}>
                    <RiCloseFill />
                </MenuIcon>
            ) : (
                <MenuIcon onClick={() => setShowHeader(!showHeader)}>
                    <RiMenuFill />
                </MenuIcon>
            )}

            <MenuList show={showHeader?'true' : undefined}>
                <MenuItem className={path === "/" ? "active" : ""}>
                    <FaArrowAltCircleRight size={20} />  <Link to="/" onClick={closeHeader}>Home</Link>
                </MenuItem>
                <MenuItem className={path === "/projects" ? "active" : ""}>
                    <FaArrowAltCircleRight size={20}   />  <Link onClick={closeHeader} to="/projects">Projects</Link>
                </MenuItem>
                <MenuItem className={path === "/courses" ? "active" : ""}>
                    <FaArrowAltCircleRight size={20}  /> <Link onClick={closeHeader} to="/courses"> Courses</Link>
                </MenuItem>
                <MenuItem className={path === "/contact" ? "active" : ""}>
                    <FaArrowAltCircleRight  size={20}  />  <Link onClick={closeHeader} to="/contact">Contact</Link>
                </MenuItem>
                {/*<MenuItem className={path === "/test" ? "active" : ""}>*/}
                {/*    <Link onClick={closeHeader} to="/Test">Test</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem className={path === "/geoLocation" ? "active" : ""}>*/}
                {/*    <Link onClick={closeHeader} to="/geoLocation">Location</Link>*/}
                {/*</MenuItem>*/}
            </MenuList>
        </HeaderContainer>
    );
};

export default StyledHeader;

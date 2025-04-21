// Import dependencies
import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
  width: 100%;
  background-color: #001220;
  z-index: 2;
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
    props.isTabletLandscape &&
    css`
      border-top-left-radius: unset;
      border-bottom-left-radius: 50%;
      height: 60%;
      width: 50%;
      transition: all 0.5s;
    `}
`;

const MenuItem = styled.li`
  color: whitesmoke;
  text-decoration: none;
  margin-block-start: 25px;

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

const Header = () => {
    const [showHeader, setShowHeader] = useState(false);
    const path = window.location.pathname;

    console.log("Path ", path);

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

            <MenuList show={showHeader}>
                <MenuItem className={path === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem className={path === "/projects" ? "active" : ""}>
                    <Link to="/projects">Projects</Link>
                </MenuItem>
                <MenuItem className={path === "/courses" ? "active" : ""}>
                    <Link to="/courses">Courses</Link>
                </MenuItem>
                <MenuItem className={path === "/contact" ? "active" : ""}>
                    {/*<Link to="/contact">Contact</Link>*/}
                </MenuItem>
                <MenuItem className={path === "/test" ? "active" : ""}>
                    {/*<Link to="/Test">Test</Link>*/}
                </MenuItem>
                <MenuItem className={path === "/geoLocation" ? "active" : ""}>
                    {/*<Link to="/geoLocation">Location</Link>*/}
                </MenuItem>
                <MenuItem className={path === "/education" ? "active" : ""}>
                    {/*<Link to="/education">Education</Link>*/}
                </MenuItem>
            </MenuList>
        </HeaderContainer>
    );
};

export default Header;

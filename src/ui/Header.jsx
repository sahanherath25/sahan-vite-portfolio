// Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const breakpoints = {
    tablet: "768px",
    desktop: "1024px",
};

const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1.2rem 2rem;
    background-color: #101820;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled(Link)`
    font-size: 1.7rem;
    font-weight: bold;
    color: #00d8ff;
    text-decoration: none;
`;

const Nav = styled.nav`
    @media (max-width: ${breakpoints.tablet}) {
        position: fixed;
        top: 0;
        right: ${({ show }) => (show ? "0" : "-100%")};
        width: 75%;
        height: 100vh;
        background-color: #101820;
        display: flex;
        flex-direction: column;
        padding-top: 5rem;
        transition: right 0.3s ease-in-out;
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
        gap: 2rem;
    }
`;

const NavItem = styled(Link)`
    font-size: 2rem !important;
    color: ${({ $active }) => ($active ? "#00d8ff" : "#ffffffb3")};
    text-decoration: none;
    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
    padding-bottom: 2px;
    border-bottom: ${({ $active }) => ($active ? "2px solid #00d8ff" : "none")};
    transition: 0.2s;

    &:hover {
        color: #00d8ff;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin: 1.5rem 2rem;
    }
`;

const MenuIcon = styled.div`
    font-size: 2rem;
    color: #fff;
    display: block;
    cursor: pointer;

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const links = [
        { path: "/", label: "Home" },
        { path: "/projects", label: "Projects" },
        // { path: "/courses", label: "Courses" },
        // { path: "/contact", label: "Contact" },
        // { path: "/education", label: "Education" },
    ];

    return (
        <HeaderWrapper>
            <Logo to="/">Sahan.Dev</Logo>

            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
            </MenuIcon>

            <Nav show={menuOpen}>
                {links.map((link) => (
                    <NavItem
                        key={link.path}
                        to={link.path}
                        $active={pathname === link.path}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </NavItem>
                ))}
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;

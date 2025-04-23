import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {nanoid} from "nanoid";
import {FaDev} from "react-icons/fa";

// Breakpoints
const breakpoints = {
    tablet: "768px",
};

// Styled Components
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

// Logo
const Logo = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    font-weight: bold;
    color: #00d8ff;
    text-decoration: none;
    z-index: 1100;
`;

// Hamburger Icon Wrapper
const Hamburger = styled.div`
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        width: 30px;
        height: 20px;
        position: relative;
        cursor: pointer;
        z-index: 1100;

        span {
            background-color: white;
            position: absolute;
            height: 3px;
            width: 100%;
            border-radius: 2px;
            transition: 0.3s ease;

            &:nth-child(1) {
                top: 0;
                transform: ${({ open }) => (open ? "rotate(45deg) translate(5px, 5px)" : "none")};
            }
            &:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
                opacity: ${({ open }) => (open ? 0 : 1)};
            }
            &:nth-child(3) {
                bottom: 0;
                transform: ${({ open }) => (open ? "rotate(-45deg) translate(5px, -5px)" : "none")};
            }
        }
    }
`;

// Slide-in Nav Panel for Mobile
const Nav = styled.nav`
    display: flex;
    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        position: fixed;
        top: 0;
        right: ${({ open }) => (open ? "0" : "-100%")};
        width: 75%;
        height: 100vh;
        background-color: #101820;
        padding-top: 6rem;
        align-items: center;
        transition: right 0.4s ease;
        z-index: 1000;
    }
`;

// Navigation Item
const NavItem = styled(Link)`
    font-size: 1.5rem;
    color: ${({ $active }) => ($active ? "#00d8ff" : "#ffffffb3")};
    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: ${({ $active }) => ($active ? "2px solid #00d8ff" : "none")};
    transition: all 0.2s;

    &:hover {
        color: #00d8ff;
        transform: translateY(-2px);
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin: 1.5rem 0;
        font-size: 1.4rem;
        opacity: ${({ open }) => (open ? 1 : 0)};
        transform: ${({ open }) => (open ? "translateY(0)" : "translateY(20px)")};
        transition: all 0.3s ease-in-out;
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const links = [
        { path: "/home", label: "Home" },
        { path: "/projects", label: "Projects" },
        // { path: "/courses", label: "Courses" },
        // { path: "/contact", label: "Contact" },
        // { path: "/education", label: "Education" }
    ];

    return (
        <HeaderWrapper>
            <Logo to="/" > <FaDev size={40} /> SAHAN</Logo>


            <Hamburger open={open} onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Nav open={open}>
                {links.map((link) => (
                    <NavItem
                        key={nanoid(10)}
                        to={link.path}
                        $active={pathname === link.path}
                        open={open}
                        onClick={() => setOpen(false)}
                    >
                        {link.label}
                    </NavItem>
                ))}
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;

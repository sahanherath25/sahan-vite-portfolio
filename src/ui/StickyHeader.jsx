import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Sidebar = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  padding: 1rem;
  border-right: 1px solid #ccc;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled(Link)`
  background: none;
  border: none;
  color: #06202B;
  font-weight: bold;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #FFA55D;
  }
`;

const StickySidebar = ({ onScrollToProjects, onScrollToTech }) => {
    return (
        <Sidebar>
            <Button onClick={onScrollToProjects} to={"/projects"}>Projects</Button>
            <Button onClick={onScrollToTech}>Technologies</Button>
        </Sidebar>
    );
};

export default StickySidebar;

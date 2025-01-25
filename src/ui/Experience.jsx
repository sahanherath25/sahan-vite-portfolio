import React, {useState} from "react";
import styled from "styled-components";
import {VscWorkspaceTrusted} from "react-icons/vsc";


const StyledContainer = styled.div`

  //background-color: red;
  position: relative;
  margin-block-start: 40px;
  width: 100%;
  color: white;
  display: flex;
  //border: 1px solid #ccc;
  transition: all 0.3s ease;
  background-color: #001220;
  gap:20px;

  &:last-child {
    margin-block-end: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &:hover::before {
    //opacity: 0.1;
  }

  &:hover {

    .content {
      h3 {
        color: #00FFCA;
      }

    }
    .period {
      h3 {
        background-color: red;
        color: #00FFCA;
      }
    }

  }

  .period {
    display: flex;
    justify-content: center;
    gap: 15px;
    

    h4 {
      color: #948c8c;
      font-size: 24px;
    }
    
    flex-basis: 30%;
    
    &:hover{

    }
  }

  .content {
    flex-basis: 70%;

    h3 {
      color: white;
      width: 100%;
      font-size: 24px;
      transition: color 0.5s ease-in-out;
    }

    p {
      color: #948c8c;
    }

  }


`


const Experience = () => {

    const [bgStyle, setBgStyle] = useState({});

    const handleMouseMove = (e) => {

        // console.log("E", e)

        const {clientX, clientY, currentTarget} = e;
        const {left, top} = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        setBgStyle({
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 100, 0, 0.1), transparent 70%)`

        });
    };

    return (
        <StyledContainer className={" experiences"} onMouseMove={handleMouseMove} style={bgStyle} onMouseLeave={()=>setBgStyle({})} >
            <div className="period">
                    <VscWorkspaceTrusted  size={30}/>
                    <h4> Professional Experience</h4>

            </div>
            <div className="content">
                <h3>Frontend Web Developer</h3>
                <p>
                    As a Software Engineer with over year and a half of expertise in web development, I have a strong
                    track record of designing and building scalable web applications from the ground up. My journey into
                    technology began with a deep curiosity about how software can solve real-world challenges, driving
                    me to excel in both front-end and back-end development.

                </p>
            </div>
        </StyledContainer>
    )
}

export default Experience
import React, {useState} from "react";
import styled from "styled-components";


const StyledContainer = styled.div`

  position: relative;
  margin-block-start: 40px;
  width: 100%;
  color: white;
  display: flex;
  //border: 1px solid #ccc;
  transition: all 0.3s ease;

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
    background: rgba(0, 0, 0, 0.2); /* Semi-transparent overlay color */
    opacity: 0.6;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    opacity: 0.1;
  }

  &:hover {

    .content {
      h3 {
        color: #00FFCA;
      }
    }

  }

  .period {
    display: flex;
    justify-content: space-between;

    h4 {
      color: #948c8c;
      font-size: 25px;
    }


    flex-basis: 30%;
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
        <StyledContainer className={" experiences"} onMouseMove={handleMouseMove} style={bgStyle}>
            <div className="period">
                <h4>2022-2024</h4>
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
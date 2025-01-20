import React from "react";
import styled from "styled-components";
import {
    colorEffectAnimation,
    colorEffectAnimationForH1,
    glowingEffect,
    glowingEffectForH1
} from "../../styles/animations.js";
import {SiExpertsexchange} from "react-icons/si";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaAws, FaRobot} from "react-icons/fa";
import {FcBiotech} from "react-icons/fc";
import {RiRobot2Fill} from "react-icons/ri";
import {TbRobot} from "react-icons/tb";


const StyledContainer = styled.section`

  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 50px auto;
  //border: 1px solid red;
  flex-direction: column;
`


const StyledLeftContainer = styled.div`
  max-width: 50%;
  align-self: flex-start;
  margin-block-start: 50px;
  //border: 1px solid yellowgreen;

`

const StyledMiddleContainer = styled.div`
  margin-block-start: 50px;
  align-self: center;
  //border: 1px solid red;
`

const StyledRightContainer = styled.div`
  margin-block-start: 50px;
  padding-block-start: 100px;
  align-self: flex-end;
  //border: 1px solid red;
  max-width: 50%;
`

const hoverEffect = `
  transform: translateX(10px);
  color: #872341;
  transition: transform 0.3s ease, color 0.3s ease;
`;


const H1 = styled.h1`

  color: #001220;
  z-index: 2;
  animation: ${glowingEffectForH1};
  font-size: 25px;
  margin-block-end: 20px;


  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0; /* Position it at the bottom of the "Contact" text */
    left: 0;
    right: 0;
    height: 2px; /* Thickness of the line */
    background-color: white;
    width: 60%; /* Adjust this to control how much width the line occupies */
    margin: 0 auto; /* Center the line */

  }

  border: 2px solid transparent;
  border-radius: 5px;
  background-clip: padding-box;
  animation: ${colorEffectAnimationForH1} 2s infinite linear;

`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;


const StyledLi = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 15px;
  color: #444;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    ${hoverEffect}
  }
`;

const P = styled.p`

  margin-block: 10px;

`


const Skills = ({dataAOS1, dataAOS2, dataAOS3}) => {

    console.log("", dataAOS1)
    console.log("", dataAOS2)
    console.log("", dataAOS3)
    return (
        <StyledContainer>
            <StyledLeftContainer className={"left-container"} data-aos={dataAOS1 ? dataAOS1 : ""}>
                <H1> <SiExpertsexchange/> Yes you're Right Im a JavaScript Expert</H1>
                <hr/>
                <P>I have strong knowledge in JavaScript and React, along with expertise in Node.js. I have
                    worked with various JavaScript libraries and tools, including:</P>
                <StyledUl>
                    <StyledLi> <FaArrowAltCircleRight/> React</StyledLi>
                    <StyledLi> <FaArrowAltCircleRight/>JavaScript</StyledLi>
                    <StyledLi><FaArrowAltCircleRight/> Redux</StyledLi>
                    <StyledLi> <FaArrowAltCircleRight/> React Query</StyledLi>
                    <StyledLi><FaArrowAltCircleRight/> Redux Toolkit</StyledLi>
                    <StyledLi><FaArrowAltCircleRight/> React Hook Form</StyledLi>
                    <StyledLi><FaArrowAltCircleRight/> Node Js</StyledLi>
                    <StyledLi><FaArrowAltCircleRight/> Styled Components</StyledLi>
                </StyledUl>
            </StyledLeftContainer>
            <StyledMiddleContainer className={"middle-container"}>
                <div className="col-md-4">
                    <img
                        src={"https://static.vecteezy.com/system/resources/thumbnails/028/735/086/original/diverse-multi-ethnic-team-in-office-indian-female-and-black-male-it-programmers-working-on-desktop-computer-specialists-creating-software-engineers-developing-app-program-shifting-rack-focus-free-video.jpg"}
                        alt="svg icon" height={200} className={"w-100"}/>
                </div>
            </StyledMiddleContainer>
            <StyledRightContainer className={"right-container"}>
                <H1> <FcBiotech/> Passionate About Full-Stack Development: Backend Technologies and Programming
                    Languages</H1>
                <hr/>
                <P className={"bold"}>I am also passionate about programming languages such as Java and Python,
                    and have hands-on experience with React Native for mobile app development. My backend
                    expertise includes working with
                </P>
                <StyledUl>
                    <StyledLi> <FaArrowAltCircleLeft />Java</StyledLi>
                    <StyledLi> <FaArrowAltCircleLeft />Python</StyledLi>
                    <StyledLi> <FaArrowAltCircleLeft />React Native</StyledLi>
                    <StyledLi><FaArrowAltCircleLeft /> Node.js</StyledLi>
                    <StyledLi> <FaArrowAltCircleLeft />Express</StyledLi>
                    <StyledLi><FaArrowAltCircleLeft />Supabase</StyledLi>
                    <StyledLi><FaArrowAltCircleLeft />RESTful APIs</StyledLi>
                </StyledUl>
            </StyledRightContainer>
            <StyledLeftContainer className={"left-container"} data-aos={dataAOS1 ? dataAOS1 : ""}>
                <div className="">
                    <div className="">
                        <H1> <RiRobot2Fill/> ML and AI Enthusiasts</H1>
                        <hr/>
                        <P>I am highly interested in Artificial Intelligence (AI) and Machine Learning (ML)
                            technologies, as well as cloud computing. I have been exploring cloud platforms like AWS,
                            which offer powerful tools for building scalable applications. Relevant technologies
                            include</P>
                        <StyledUl>
                            <StyledLi> <FaAws size={25} /> AWS (Amazon Web Services)</StyledLi>
                            <StyledLi> <FaRobot /> Artificial IntelStyledLigence (AI)</StyledLi>
                            <StyledLi> <TbRobot /> Machine Learning (ML)</StyledLi>
                        </StyledUl>
                    </div>
                </div>
            </StyledLeftContainer>
            <StyledMiddleContainer className={"middle-container"}>
                <div className="col-md-4">
                    <img
                        src={"https://static.vecteezy.com/system/resources/thumbnails/028/735/086/original/diverse-multi-ethnic-team-in-office-indian-female-and-black-male-it-programmers-working-on-desktop-computer-specialists-creating-software-engineers-developing-app-program-shifting-rack-focus-free-video.jpg"}
                        alt="svg icon" height={200} className={"w-100"}/>
                </div>
            </StyledMiddleContainer>
            <StyledRightContainer className={"right-container"}>
                <div className="col-md-4 ">
                    <div className="n-box-2 px-3 py-5">

                        <H1>Exploring the Future: AI, Machine Learning, and Cloud Technologies</H1>
                        <hr/>
                        <P className={"bold"}>I am also passionate about programming languages such as Java and Python,
                            and have hands-on experience with React Native for mobile app development. My backend
                            expertise includes working with
                        </P>
                        <StyledUl>
                            <StyledLi>AWS (Amazon Web Services)</StyledLi>
                            <StyledLi>Artificial IntelStyledLigence (AI)</StyledLi>
                            <StyledLi>Machine Learning (ML)</StyledLi>
                        </StyledUl>
                    </div>

                </div>
            </StyledRightContainer>
        </StyledContainer>
    )
}

export default Skills
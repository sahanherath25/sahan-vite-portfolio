import React, {forwardRef, useState} from "react";
import styled, {css} from "styled-components";
import Experiences from "../../ui/Experiences.jsx";
import Experience from "../../ui/Experience.jsx";
import {SiPaloaltosoftware} from "react-icons/si";
import {BsEmojiSmileUpsideDown} from "react-icons/bs";

import{motion} from "framer-motion";


const StyledContainer = styled(motion.section)`

  background-color: #001220;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 100px;
  color: whitesmoke;
  align-items: flex-start;
  
  & > div > p {
    transition: opacity 0.5s ease-in-out; /* Apply transition to the p element */
    opacity: 0.5; /* Set the initial opacity */
  }
  
  &>div>p:hover{
    opacity: 1;
    cursor: cell;
    
  }


`

const LeftContainer = styled.div`
  //background-color: aqua;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  & > :first-child {
    //grid-column: 1/2;
    //grid-row: 1/3;
    //background-color: yellow;

  }


`

const ButtonGroup = styled.div`
  margin-block-start: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;

`

const Button = styled.button`

  opacity: 0.6;
  margin-inline-start: 4px;
  color: whitesmoke;
  padding-left: 50px;
  position: relative;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease, transform 0.3s ease, right 0.3s ease;
  



  &:hover {
    right: -10px;
    opacity: 1;
    background-color: transparent;
    transform: scale(1.05) translateX(40px);
  }

  ${(props)=> props.type==="special" && css`
    color: yellowgreen;
  `}

  &::before {
    opacity: 0.6;
    content: "";
    position: absolute;
    left: 5px;
    width: 30px;
    height: 2px;
    background-color: white;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    //background-color: red; // Change line background color
  }



`


const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const RightContainer = styled.div`
  //background-color: red;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  font-size: 40px;
`

const H3 = styled.h3`
  font-size: 30px;
  opacity: 0.8;
`

const P = styled.p`
  margin-block-start: 8px;
  color: whitesmoke;
  opacity: 0.7;
`

const InnerRightWrapper = styled.div`
    
`

const onClickProject=()=>{

}

const A=styled.a`

    color: unset;
    text-decoration: none;
`

const ProjectsSection = forwardRef(({techHandle, sahan}, ref) => {

    const [isVisible, setIsVisible] = useState(false);

    // console.log("PROJECSTS REF",sahan)
    // console.log("PROJECSTS REF",techHandle)

    const handleClick = () => {

        techHandle()
    }


    return (
        <StyledContainer
            as={"section"} ref={ref} id={"projects"}
        >

            <LeftContainer>
                <H1> Sahan Herath </H1>
                <H3> <SiPaloaltosoftware /> Software Engineer <SiPaloaltosoftware />  </H3>
                <P>I Build pixel Perfect Engaging And Acessible digitial Experiences</P>


                <ButtonGroup>
                    <Button>About</Button>
                    <Button>Experience</Button>
                    <Button><A href="https://crave-crust-sahan.netlify.app/">Projects</A></Button>
                    <Button type={"special"} onClick={handleClick}>Tech Stack</Button>
                </ButtonGroup>
            </LeftContainer>
            <RightContainer>

                <P>
                    Enthusiastic software engineer with hands-on experience in front-end development, specializing in
                    the creation of web and mobile applications. With a solid foundation in software engineering
                    principles and a passion for user-friendly design, I am eager to leverage my skills to help
                    organizations achieve their goals. As a recent graduate, I am actively seeking a role in Software
                    Engineering to further develop my expertise and make a meaningful impact.

                </P>

                <P>
                    My areas of expertise include:
                    HTML, CSS, JavaScript, React, React Native , Java, Python responsive design, user experience
                    (UX)
                    optimization, modern frameworks (React,), Docker, AWS, web accessibility, team collaboration,
                    problem-solving, and continuous learning.
                </P>

                <P>
                    I am always eager to take on new challenges and inspire my peers to excel. Guiding fellow developers
                    to push their boundaries and unleash their creativity is what truly motivates me. Let's connect and
                    explore the innovative solutions we can build together!
                </P>


                <Experiences>
                    <Experience/>
                </Experiences>


            </RightContainer>

        </StyledContainer>
    )
})

export default ProjectsSection
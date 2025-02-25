import React, {useEffect} from "react";
import {useRef} from "react";

import bgImage from "../assets/images/circle-scatter-haikei2.svg";
import styled, {css} from "styled-components";
import Button from "./Button.jsx";
import UIButton from "./UIButton.jsx";
import {motion, useInView, useAnimation} from "framer-motion";

import {Button as MButton} from "@mui/material"
import breakpoints from "../styles/breakpoints.jsx";

const StyledIntroContainer = styled(motion.div)`

  background-image: url(${bgImage});
  height: 95vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;

  ${breakpoints.tablet(css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f6f6f6;
  `)}
  ${breakpoints.desktop(css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f6f6f6;
    
  `)}
  
`

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  ${breakpoints.tablet(css`
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    align-items: center;
  `)}

  ${breakpoints.desktop(css`
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    align-items: center;
  `)}

`


const H1 = styled.h1`

  color: rgba(255, 255, 255, 0.466);
  font-size: 50px;
  text-transform: uppercase;
  transition: opacity 1s ease, color ease 1s, text-shadow 0.5s ease;
  opacity: 0.5;
  text-align: center;
  
  &:hover {
    //z-index: 5;
    opacity: 1;
    cursor: pointer;
    color: whitesmoke;
    text-shadow: 0px 0px 10px #fff;
  }

  ${breakpoints.tablet(css`
    text-align: unset;
    font-size: 72px;
  `)}
  
  ${breakpoints.desktop(css`
    font-size: 100px;
    align-self: flex-start;
  `)}
`

const StyledIntroContent = styled.div`
  //border: 1px solid whitesmoke;
  display: flex;
  margin-block-start: 20px;
  align-items: center;
  justify-content: space-evenly;


`

const P = styled.p`
  font-size: 25px;
`

// TODO Heading Styles

const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;


  ${breakpoints.tablet(css`
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}   
  
  ${breakpoints.desktop(css`
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)} 

`
const H2 = styled.p`

  align-self: center;

  ${breakpoints.desktop(css`
    font-size: 30px;
    align-self: flex-start;
  `)}
  
  
`

const Intro = ({handleClick}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {

        console.log("LOG is in view")
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const getStart = () => {
        console.log("SCROLL INTO Click")
        handleClick()

    }

    return (
        <StyledIntroContainer

            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}

            className="introduction">
            <div className="overlay">
            </div>
            <StyledInnerWrapper className={"inner-wrapper"}>
                <HeadingWrapper>
                    <H1 as={"h1"}> Hey I'm Sahan.</H1>
                    <H2> I build things for the web</H2>
                </HeadingWrapper>

                <StyledIntroContent className="intro-content">
                    {/*<P>Software Engineer </P>*/}
                    {/*<UIButton  type={"submit"} onClick={getStart}>Get Start</UIButton>*/}
                    <UIButton hoverBgColor={"#872341"} type={"button"} bgColor={"#BE3144"} textColor={"#fff"}
                              onClick={getStart} className={"primary-button btn-lg bold "}>Get
                        Started</UIButton>
                </StyledIntroContent>
            </StyledInnerWrapper>
        </StyledIntroContainer>

    )
}

export default Intro
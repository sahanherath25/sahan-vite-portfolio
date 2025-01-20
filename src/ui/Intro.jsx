import React from "react";
import {useRef} from "react";

import bgImage from "../assets/images/circle-scatter-haikei2.svg";
import styled from "styled-components";
import Button from "./Button.jsx";
import UIButton from "./UIButton.jsx";


const StyledIntroContainer = styled.div`

  background-image: url(${bgImage});
  height: 95vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;
`

const StyledInnerWrapper = styled.div`



`

const H1 = styled.h1`

  color: rgba(255, 255, 255, 0.466);
  font-size: 100px;
  text-transform: uppercase;
  transition: opacity 1s ease, color ease 1s, text-shadow 0.5s ease;
  opacity: 0.5;

  &:hover {
    //z-index: 5;
    opacity: 1;
    cursor: pointer;
    color: whitesmoke;
    text-shadow: 0px 0px 10px #fff;
  }
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

const Intro = ({handleClick}) => {

    const getStart = () => {
        console.log("SCROLL INTO Click")
        handleClick()

    }

    return (
        <StyledIntroContainer className="introduction">
            <div className="overlay" >
            </div>
            <StyledInnerWrapper className={"inner-wrapper"}>
                <H1 as={"h1"}> I'm Sahan</H1>
                <StyledIntroContent className="intro-content">
                    <P>Frontend <br/>Developer </P>
                    {/*<UIButton  type={"submit"} onClick={getStart}>Get Start</UIButton>*/}
                    <Button type={"button"} onClick={getStart} className={"primary-button btn-lg bold "}>Get
                        Started</Button>
                </StyledIntroContent>
            </StyledInnerWrapper>
        </StyledIntroContainer>

    )
}

export default Intro
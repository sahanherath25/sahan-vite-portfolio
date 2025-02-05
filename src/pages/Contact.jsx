import React from "react";
import styled from "styled-components";
import Header from "../ui/Header.jsx";
import UnderDevelopment from "./UnderDevelopment.jsx";

import {motion} from "framer-motion";

const Container = styled.div`
  
  //width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px solid red;
  //height: 700px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  position: relative;
`
const P = styled.p`
  background-color: coral;
  flex: 2;
`

const H1 = styled.h1`
  flex: 2;
  background-color: greenyellow;
`
const ImageContainer = styled.div` 
  flex: 1;
  width: 100%;
  border: 2px solid brown;
  //padding-top: 56.25%;
  //padding-top: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #001220;
  overflow: hidden;

`

const Image = styled.img`
  width: 100%;
  height: 100%;
  //display: block;
  //aspect-ratio: 1/1;
  object-fit: cover;
  //position: absolute;
  //top: 0;
  position: absolute;
  top: 0;
  left: 0;
  //object-position: 50% 50%;
  //transform: scale(1.5) translate(0, 50%);


`
// const Image = styled.img`
//   //height: 100%; /* 50% of card height */
//   width: 100%;
//   object-fit: cover;
//   object-position: left ;
// `;


const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{width: "900px", margin: "0 auto", border: "1px solid black"}}
        >


            <UnderDevelopment/>
        </motion.section>
    )
}

export default Contact
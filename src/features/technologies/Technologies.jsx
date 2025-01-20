import styled from "styled-components";
import {forwardRef, useEffect} from "react";
import initAOS from "../../aos/aos.js";
import AOS from "aos"
import {FaJava, FaPython, FaReact, FaSass} from "react-icons/fa";
import {RiNodejsLine, RiSupabaseFill} from "react-icons/ri";
import {SiExpress, SiMysql, SiStyledcomponents} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import Technology from "./Technology.jsx";
import {TbBrandReactNative} from "react-icons/tb";


const StyledContainer = styled.section`
  //display: flex;
  //flex-wrap: wrap;
  //border: 1px solid darkred;
  display: grid;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 50px 100px;
  color: whitesmoke;
  background-color: #001220;

`

const TechContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  alignment-baseline: center;
  width: 100%;
  margin: 0 auto;
  border: 1px solid orangered;
  padding: 20px 20px;

`

const H2=styled.h2`
    
    
    
`

const Technologies = forwardRef( (props, ref)=> {

    useEffect(() => {

        initAOS()
        AOS.refresh()
    }, [])

    return (
        <StyledContainer ref={ref} >

            <H2> My  Tech Stack</H2>
            <TechContainer>
                <Technology><FaReact/> React</Technology>
                <Technology> <IoLogoJavascript/> JavaScript</Technology>
                <Technology>MongoDB</Technology>
                <Technology> <RiNodejsLine/> Node Js</Technology>
                <Technology> <SiExpress/> Express</Technology>
                <Technology> <FaJava/> Java</Technology>
                <Technology> <FaPython/> Python</Technology>
                <Technology> <SiStyledcomponents /> Styled Components</Technology>
                <Technology> <FaSass /> SASS</Technology>
                <Technology> <TbBrandReactNative /> React Native</Technology>
                <Technology> <RiSupabaseFill /> Supabase </Technology>
                <Technology> <SiMysql /> MySQL</Technology>

            </TechContainer>

        </StyledContainer>
    )
})


export default Technologies
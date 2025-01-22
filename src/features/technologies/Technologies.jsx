import styled from "styled-components";
import {forwardRef, useEffect} from "react";
import initAOS from "../../aos/aos.js";
import AOS from "aos"
import {FaAndroid, FaCss3Alt, FaDocker, FaGit, FaGithub, FaJava, FaPython, FaReact, FaSass} from "react-icons/fa";
import {RiNodejsLine, RiSupabaseFill} from "react-icons/ri";
import {SiExpress, SiGithubactions, SiMysql, SiStyledcomponents} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import Technology from "./Technology.jsx";
import {TbBrandReactNative} from "react-icons/tb";
import {FcBiotech} from "react-icons/fc";

import { motion ,useInView,useAnimation} from "framer-motion";
import {DiMongodb} from "react-icons/di";
import {colorEffectAnimationForHeading} from "../../styles/animations.js";

const StyledContainer = styled(motion.section)`
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
  align-items: center;
  alignment-baseline: center;
  width: 80%;
  margin: 0 auto;
  //border: 1px solid orangered;
  padding: 20px 20px;

`



const H2 = styled.h2`

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 40px;
  text-align: center;
  color: white;
  z-index: 1;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  background-clip: padding-box;
  animation: ${colorEffectAnimationForHeading} 2s infinite linear;

`

const Technologies = forwardRef( (props, ref)=> {

    const isInView=useInView(ref,{once:true})
    const mainControls=useAnimation()



    useEffect(() => {

        // initAOS()
        // AOS.refresh()

        if(isInView){
            mainControls.start("visible")
        }


    }, [isInView])

    return (
        <StyledContainer

            ref={ref}
            variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{
                duration:0.5,
                delay:0.25
            }}
        >

            <H2> <FcBiotech /> My  Tech Stack</H2>
            <TechContainer>
                <Technology><FaReact/> React</Technology>
                <Technology> <IoLogoJavascript/> JavaScript</Technology>
                <Technology> <DiMongodb />MongoDB</Technology>
                <Technology> <RiNodejsLine/> Node Js</Technology>
                <Technology> <SiExpress/> Express</Technology>
                <Technology> <FaJava/> Java</Technology>
                <Technology> <FaAndroid /> Android </Technology>
                <Technology> <FaPython/> Python</Technology>
                <Technology> <SiStyledcomponents /> Styled Components</Technology>
                <Technology> <FaSass /> SASS</Technology>
                <Technology> <FaCss3Alt />CSS</Technology>
                <Technology> <FaDocker /> Docker</Technology>
                <Technology> <FaGit /> Git</Technology>
                <Technology> <FaGithub /> Github</Technology>
                <Technology> <SiGithubactions /> Github Actions</Technology>
                <Technology> <TbBrandReactNative /> React Native</Technology>
                <Technology> <RiSupabaseFill /> Supabase </Technology>
                <Technology> <SiMysql /> MySQL</Technology>

            </TechContainer>

        </StyledContainer>
    )
})


export default Technologies
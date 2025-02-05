import React, {useEffect} from "react";
import initAOS from "../aos/aos.js";
import {FaLaptopCode} from "react-icons/fa";
import UnderDevelopment from "./UnderDevelopment.jsx";
import {color, motion} from "framer-motion";
import {styled, css} from "styled-components";


const StyledContainer = styled.div`

  display: flex;
  border: 1px solid red;
  width: 90%;
  margin: 0 auto;
  height: 800px;
  flex-wrap: wrap;
  flex-direction: column;
  
  
  align-items: stretch;
  align-content: center;
  justify-content: center;


`

const StyledDiv = styled.div`

  flex: 1;
  width: 200px;
  min-height: 100px;
  ${(props) => props.bgColor ? css`background-color: ${props.bgColor}` : css`color: #f6f6f6`}
  



`
// color:${(props)=>props.color||"#fas65d"}

const Courses = () => {

    useEffect(() => {

        initAOS()

    }, [])

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <UnderDevelopment/>
        </motion.div>
    )
}

export default Courses
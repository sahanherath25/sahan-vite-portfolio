import React, {useEffect} from "react";
import initAOS from "../aos/aos.js";
import {FaLaptopCode} from "react-icons/fa";
import UnderDevelopment from "./UnderDevelopment.jsx";


import{motion} from "framer-motion";

const Courses=()=>{

    useEffect(()=>{

        initAOS()

    },[])

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <UnderDevelopment/>
        </motion.div>
    )
}

export default Courses
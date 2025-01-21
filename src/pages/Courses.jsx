import React, {useEffect} from "react";
import initAOS from "../aos/aos.js";
import {FaLaptopCode} from "react-icons/fa";
import UnderDevelopment from "./UnderDevelopment.jsx";

const Courses=()=>{

    useEffect(()=>{

        initAOS()

    },[])

    return(
        <div>
            <UnderDevelopment/>
        </div>
    )
}

export default Courses
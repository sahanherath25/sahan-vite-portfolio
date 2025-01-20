import React, {useEffect} from "react";
import initAOS from "../aos/aos.js";
import {FaLaptopCode} from "react-icons/fa";

const Courses=()=>{

    useEffect(()=>{

        initAOS()

    },[])

    return(
        <div>
            <h1 data-aos="fade-right"> Under Development</h1>
        </div>
    )
}

export default Courses
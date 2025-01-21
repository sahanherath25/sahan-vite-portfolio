import React from "react";
import styled from "styled-components";
import Header from "../ui/Header.jsx";
import UnderDevelopment from "./UnderDevelopment.jsx";

import{motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.section

            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <UnderDevelopment/>
        </motion.section>
    )
}

export default Contact
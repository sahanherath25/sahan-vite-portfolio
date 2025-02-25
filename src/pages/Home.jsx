import React, {useEffect, useRef, useState} from "react";
import Hero from "../ui/Hero.jsx";
// import {getUserData} from "../services/apiUser.js";
import {useQuery} from "@tanstack/react-query";
import Intro from "../ui/Intro.jsx";
import blobImage from "../assets/images/blob-home.svg"
import initAOS from "../aos/aos";
import SwiperComponent from "../ui/Swiper.jsx";
import ProjectsSection from "../features/projects/ProjectsSection.jsx";
import Technologies from "../features/technologies/Technologies.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import WaveEnd from "../ui/WaveEnd.jsx";
import Skills from "../features/skills/Skills.jsx";

import{motion} from "framer-motion";
import WaterWave from "../VisualEffects/WaterWave.jsx";
import WaterWaveWrapper from "../VisualEffects/WaterWave.jsx";
import {getNewsData, myApiTours} from "../services/apiUser.js";




const Home = () => {

    const {isLoading, data: cabins, error} = useQuery({
        queryKey: ["users"],
        //TODO actual function to fetch data
        queryFn: myApiTours,
        select:(data)=>{
            return data.map((tour)=>{
                return tour.name
            })
        }
    })

    console.log("SAHAN DATA ",cabins)


    const projectSectionRef = useRef(null);
    const TechnologiesRef = useRef(null);


    const handleScrollToProjects = () => {

        console.log("PROJEC REF" ,projectSectionRef)

        if (projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToTechStack = () => {

        if (TechnologiesRef.current) {
            TechnologiesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    useEffect(() => {
        initAOS()
        // AOS.init()

    }, [])

    return (
               <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <div  data-aos={"zoom-in-down"} style={{
                    backgroundImage:`url(${blobImage})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                }}>
                    <Intro  handleClick={handleScrollToProjects} />
                </div>
                <ProjectsSection ref={projectSectionRef} sahan={true} techHandle={handleScrollToTechStack}/>
                <Technologies  ref={TechnologiesRef}/>
                <ContactForm/>
                <Skills />
                <WaveEnd/>

            </motion.div>


    )
}

export default Home
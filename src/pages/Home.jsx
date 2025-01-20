import React, {useEffect, useRef} from "react";
import Hero from "../ui/Hero.jsx";
import {getUserData} from "../services/apiUser.js";
import {useQuery} from "@tanstack/react-query";
import Intro from "../ui/Intro.jsx";
import blobImage from "../assets/images/blob-home.svg"
import initAOS from "../aos/aos";
import Wave from "../ui/Wave.jsx";
import AOSInitializer from "../aos/aos";
import Features from "../ui/Feature";
import About from "../ui/About.jsx";

import SwiperComponent from "../ui/Swiper.jsx";
import AOS from "aos";
import ProjectsSection from "../features/projects/ProjectsSection.jsx";
import Technologies from "../features/technologies/Technologies.jsx";
import SimpleSwiper from "../features/Swiper/SimpleSwiper.jsx";
import Experience from "../ui/Experience.jsx";
import Experiences from "../ui/Experiences.jsx";
import ParallexSwiper from "../features/Swiper/ParallexSwiper.jsx";
import ContactForm from "../ui/ContactForm.jsx";




const Home = () => {

    const {isLoading, data: cabins, error} = useQuery({
        queryKey: ["users"],
        //TODO actual function to fetch data
        queryFn: getUserData,
    })


    const projectSectionRef = useRef(null);
    const TechnologiesRef = useRef(null);


    const handleScrollToProjects = () => {

        console.log("PROJEC REF" ,projectSectionRef)

        if (projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToTechStack = () => {

        console.log("CLEICKED TO TECH")

        console.log("PROJEC REF" ,TechnologiesRef)

        if (TechnologiesRef.current) {
            TechnologiesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    useEffect(() => {
        initAOS()
        // AOS.init()

    }, [])

    return (

        <div>
            <div  data-aos={"zoom-in-down"} style={{
                backgroundImage:`url(${blobImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
                <Intro  handleClick={handleScrollToProjects} />
        </div>


            {/*<Hero ref={heroRef}  dataAOS={"fade-up"}  dataAOS2={"zoom-in-up"} />*/}

            <SwiperComponent />
            <ProjectsSection ref={projectSectionRef} sahan={true} techHandle={handleScrollToTechStack}/>
            <Technologies  ref={TechnologiesRef}/>
            <ContactForm/>
            {/*<ParallexSwiper/>*/}


        </div>


    )
}

export default Home
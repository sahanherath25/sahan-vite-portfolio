import React, {useEffect} from "react";
import styled, {css} from "styled-components";
import initAOS from "../aos/aos.js";
import Row from "../ui/Row.jsx";
import Header from "../ui/Header.jsx";
import {FaLaptopCode} from "react-icons/fa";
import Grid from "../ui/Grid.jsx";
import {useQuery} from "@tanstack/react-query";
import getProjectData from "../features/projects/getProjectData.js";
import {getNewsData} from "../features/projects/apiProjects.js";
import {fetchTours} from "../features/user/useUsers.js";

import {motion} from "framer-motion";
import Intro from "../ui/Intro.jsx";
import Button from "../ui/Button.jsx";
import Wave from "../ui/Wave.jsx";

import AOS from "aos";


import 'aos/dist/aos.css';
import UIButton from "../ui/UIButton.jsx";
import Skills from "../features/skills/Skills.jsx";
import breakpoints from "../styles/breakpoints.jsx";
import {SiBmcsoftware} from "react-icons/si";
import {fetchUserData} from "../services/apiUser.js";
import Spinner from "../ui/Spinner.jsx";
import {fetchProjectOverView} from "../services/apiProjects.js";

const H1 = styled.h1`
  color: #09122C;
  font-size: 45px;
`


const StyledContainer = styled(motion.section)`
  padding-block-start: 100px;
  display: grid;
  padding-block-end: 100px;


`

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-block-end: 50px;
  margin-block-start: 50px;

  //TODO Correct
  ${breakpoints.desktop(css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid sandybrown;
    width: 80%;
    margin: 0 auto;
    margin-block-end: 50px;
    margin-block-start: 50px;
  `)}

`

const LeftContainer = styled.div`
  width: 100%;
  padding: 50px;
  border-radius: 50px;
  //border: 1px solid greenyellow;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9,
    -20px -20px 60px #ffffff;


  ${breakpoints.desktop(css`
    align-items: flex-start;
    //border: 1px solid sandybrown;
    width: 50%;
    padding: 50px;
  `)}



`

const RightContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  //border: 1px solid coral;


  ${breakpoints.desktop(css`
    //border: 1px solid sandybrown;
    width: 30%;
    padding: 50px;
  `)}

`


const IntroContainer = styled(Row)`

  width: 90%;
  margin: 0 auto;
  align-items: center;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }



`


const Projects = () => {

    // const {data, isLoading} = useQuery({
    //     queryKey: ["projects"],
    //     queryFn: getProjectData
    // })

    // const {data: usersData, isLoading: loading} = useQuery({
    //     queryKey: ["users"],
    //     queryFn: fetchTours,
    //     select: (data) => {
    //         return data.map((tour) => {
    //             return {tour: tour.name, difficulty: tour.difficulty}
    //         })
    //     }
    // })

    // const {data, error, isLoading} = useQuery({
    //     queryKey: ["users"],
    //     queryFn: fetchUserData,
    //     select: (data) => {
    //         console.log("DATA ", data)
    //         return data.map((item) => {
    //             return {title: item.title, techStack: item.tech_stack}
    //         })
    //     },
    //     onSuccess:()=>{
    //         console.log("HELLO SAHAN")
    //     }
    // })

    const {data, error, isLoading} = useQuery({
        queryKey: ["projectOverview"],
        queryFn: fetchProjectOverView,


    })


    useEffect(() => {
        initAOS()

        // console.log("Project  DATA RECEIVED ", data)

    }, [data])


    if (isLoading) return <Spinner/>
    
    const data1=[
        {description:"This is a React Application for Pizza Ordering Website Using React",imageUrl:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project2.jpeg", href:"https://crave-crust-sahan.netlify.app/"},
        {imageUrl:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/Project1.jpeg", href:""},
        {imageUrl:"", href:""},
        {imageUrl:"", href:""}
    ]

    const data2=[
        {description:"Portfolio Project",imageUrl:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//next2.jpeg", href:"https://diana-25-portfolio.netlify.app/"},
        {description:"BlogPost Application",imageUrl:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//next_project_blogpost.png", href:"https://insight-blog.vercel.app"},
        {description:"Code Snippet",imageUrl:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//code-snippet.png", href:"https://advanced-code-snippet.vercel.app"}
    ]

    return (

        <StyledContainer

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="header" data-aos={"fade-in"}>

            <IntroContainer>
                {data.headline?  <H1> <SiBmcsoftware/>{data.headline}<SiBmcsoftware/> </H1>:null}
                {data.project_intro?  <p className={""}>{data.project_intro}</p> :null}
            </IntroContainer>

            <ProjectContainer type={"horizontal"} width={900}>
                <LeftContainer className="col-md-6 n-box-2 p-3 left-container py-5">
                    {data?
                        <>
                            {data?.title ? (<h1 className={"font bold"}>{data.title}</h1> ):null}
                            { data?.sub_title ? (<p>{data.sub_title}</p>) :null}
                        </>
                        :null
                    }
                    <UIButton bgColor={"#09122C"}>Get Started</UIButton>
                </LeftContainer>
                <RightContainer className="right container ">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#001D30"
                              d="M42.8,-74.4C54,-67.5,60.9,-53.3,67.4,-39.7C73.9,-26.1,80.1,-13,82.7,1.5C85.3,16.1,84.4,32.1,76.9,44.1C69.5,56,55.4,63.9,41.5,69.6C27.6,75.4,13.8,79,0.1,78.8C-13.5,78.6,-27.1,74.5,-39.7,68C-52.4,61.5,-64.1,52.7,-71.5,40.9C-78.9,29.2,-82,14.6,-81.1,0.5C-80.3,-13.6,-75.6,-27.3,-68.1,-38.8C-60.6,-50.4,-50.3,-59.9,-38.5,-66.4C-26.7,-73,-13.4,-76.5,1.2,-78.6C15.7,-80.7,31.5,-81.2,42.8,-74.4Z"
                              transform="translate(100 100)"/>
                    </svg>

                    <FaLaptopCode

                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: " translate(-50%, -50%)"
                        }}
                        color={"#fff"}
                        size={"180"}
                        className={"position-absolute top-50 start-50 translate-middle"}/>

                </RightContainer>
            </ProjectContainer>

            <Grid title={"React Projects"} data={data1}/>

            <Grid title={"Next Projects"} data={data2}/>




        </StyledContainer>


    )
}

export default Projects
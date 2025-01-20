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
import Intro from "../ui/Intro.jsx";
import Button from "../ui/Button.jsx";
import Wave from "../ui/Wave.jsx";

import AOS from "aos";


import 'aos/dist/aos.css';
import UIButton from "../ui/UIButton.jsx";

const H1 = styled.h1`
  color: wheat;
`


const StyledContainer = styled.div`
  display: grid;
`

const ProjectContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 0 auto;
  //border: 1px solid deeppink;
  margin-block-end: 50px;
  margin-block-start: 50px;
`

const LeftContainer = styled.div`
  width: 50%;
  padding: 50px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9,
    -20px -20px 60px #ffffff;
`

const RightContainer = styled.div`

  width: 30%;
  position: relative;
  z-index: 0;
  //border: 1px solid coral;

`

const Projects = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["projects"],
        queryFn: getProjectData
    })

    const {data: usersData, isLoading: loading} = useQuery({
        queryKey: ["users"],
        queryFn: fetchTours,
        select: (data) => {
            return data.map((tour) => {
                return {tour: tour.name, difficulty: tour.difficulty}
            })
        }
    })

    useEffect(() => {
        initAOS()

    }, [])


    return (

        <section>

            <StyledContainer className="header" data-aos={"fade-in"}>

                <Row>
                    <H1>Innovative Software Solutions Crafted with Modern Technologies*</H1>

                    <p>
                        Welcome to my Projects Showcase! Here, you will find a collection of my most notable projects,
                        developed with cutting-edge technologies like Vite and React. Each project reflects my
                        commitment to
                        building functional, efficient, and user-friendly applications. Click on the project titles to
                        explore detailed descriptions and insights into my development process.
                    </p>
                </Row>


                <ProjectContainer type={"horizontal"} width={900}>
                    <LeftContainer className="col-md-6 n-box-2 p-3 left-container py-5">
                        <h1 className={"font bold"}>Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            animi consectetur, consequatur dignissimos magni minus porro quisquam quos ut voluptate.
                        </p>

                        <UIButton >Get Started</UIButton>
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


            </StyledContainer>

            <Grid/>

        </section>
    )
}

export default Projects
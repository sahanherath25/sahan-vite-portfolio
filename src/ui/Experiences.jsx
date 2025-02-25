import React from "react";
import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import {getExperiences} from "../services/apiExperiences.js";
import Experience from "./Experience.jsx";

const StyledExperiences=styled.div`
  
  margin-block-start: 50px;
  height: auto;
  max-height:400px;
  overflow-y: auto;
  width: 100%;
  background-color: #001220;
  //border: 1px solid  white;


  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
  
`

const Experiences=({children})=>{

    const {data,loading}=useQuery({
        queryKey:"experience",
        queryFn:getExperiences,
        select:({achievement_1,position,start_date,end_date})=>{
            return {achievement_1,position,start_date,end_date}
        }
    })

    console.log("DATA IN EXPEREC IS ",data)

    console.log("IS LOADING ")

    return(
        <StyledExperiences className={"experience-container"}>
            <Experience data={data}/>
        </StyledExperiences>
    )
}

export default Experiences
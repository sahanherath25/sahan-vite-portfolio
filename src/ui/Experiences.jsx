import React from "react";
import styled from "styled-components";

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
    return(
        <StyledExperiences className={"experience-container"}>
            {children}
        </StyledExperiences>
    )
}

export default Experiences
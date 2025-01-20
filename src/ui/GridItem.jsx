import styled from "styled-components";
import {projectAnimation} from "../styles/animations.js";

const StyledGridItem = styled.div`
  

  border: 1px solid aquamarine;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  animation: ${projectAnimation} 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  

`

const StyledImageContainer = styled.div`
  flex-grow: 1;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const StyledContentWrapper = styled.div`

  background-color: #f6f6f6;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  transition: all 500ms ease-in-out;


  &:hover {
    opacity: 0.5;
  }

`

const H1 = styled.h1`

`

const OverLay = styled.div`

  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
  
  
`


const handleHover = () => {

}



function GridItem() {

    return (
        <StyledGridItem>

            <StyledImageContainer>
                <Image
                    src="https://images.unsplash.com/photo-1735597693189-9ba81b5bbc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""/>
            </StyledImageContainer>
            <OverLay className="overlay"></OverLay>
            <StyledContentWrapper>
                <H1 as={"h3"}>Test</H1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis consequuntur,
                </p>
            </StyledContentWrapper>


        </StyledGridItem>
    )
}

export default GridItem
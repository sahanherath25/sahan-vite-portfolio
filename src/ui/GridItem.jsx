import styled,{css} from "styled-components";
import {projectAnimation} from "../styles/animations.js";
import breakpoints from "../styles/breakpoints.jsx";

const StyledGridItem = styled.div`
  

  //border: 1px solid aquamarine;
  display: flex;
  height: 300px;
  flex-direction: column;
  gap: 2px;
  position: relative;
  margin: 2px;
  //animation: ${projectAnimation} 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }


  ${breakpoints.desktop( css`
  
    //background-color: red;
    animation: ${projectAnimation} 10s linear infinite;
  `)}
  

`

const StyledImageContainer = styled.div`
  //flex-grow: 1;

height: 100%`


const Image = styled.img`
  width: 100%;
  height: 100%;
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
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.1);
    
    p{
      color: white;
    }
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

const StyledLink=styled.a`
    color:black;
  background-color: #00FF9C;
  padding: 10px;
`


function GridItem({imgSrc,heading="Project",href,description}) {

    return (
        <StyledGridItem>

            <StyledImageContainer>
                <Image

                    src={imgSrc?imgSrc:"https://images.unsplash.com/photo-1735597693189-9ba81b5bbc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt=""/>
            </StyledImageContainer>
            <OverLay className="overlay"></OverLay>
            <StyledContentWrapper>

                {href?
                    <StyledLink target={"_blank"} href={href}><H1> View {heading}</H1> </StyledLink>
                    :
                    <H1 as={"h3"}>{heading}</H1>}

                <p>{description?description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis consequuntur,\n" +
                    "     "}</p>
            </StyledContentWrapper>


        </StyledGridItem>
    )
}

export default GridItem
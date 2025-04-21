import styled, {css} from "styled-components";
import {projectAnimation} from "../styles/animations.js";
import breakpoints from "../styles/breakpoints.jsx";

const StyledGridItem = styled.div`
    
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
    margin: 5px;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 20px 30px rgba(0,0,0,0.15);
    }

    height: 300px;
    display: flex;
    flex-direction: column;

`

const StyledImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    ${StyledGridItem}:hover & {
        transform: scale(1.1);
    }
`

const StyledContentWrapper = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;

    ${StyledGridItem}:hover & {
        opacity: 1;
    }

    h1, h3 {
        margin-bottom: 10px;
        font-size: 1.2rem;
        color: #00FF9C;
    }

    p {
        font-size: 0.9rem;
        color: #eaeaea;
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

const StyledLink = styled.a`
    background-color: #FFA955;
    color: black;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    //margin-bottom: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #00e88c;
    }
`


function GridItem({imgSrc, heading = "Project", href, description}) {

    if(!imgSrc)  return  null;

    return <StyledGridItem>
                            <StyledImageContainer>
                                <Image

                                    src={imgSrc}
                                    alt=""/>
                            </StyledImageContainer>
                            <OverLay className="overlay"></OverLay>
                            <StyledContentWrapper>

                                {href?
                                    <StyledLink target={"_blank"} href={href}> View {heading}</StyledLink>
                                    :
                                    <H1 as={"h3"}>{heading}</H1>}

                                <p>{description?description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis consequuntur,\n" +
                                    "     "}</p>
                            </StyledContentWrapper>
                        </StyledGridItem>

}


export default GridItem
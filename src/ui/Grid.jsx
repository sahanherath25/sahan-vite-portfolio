import styled, {css} from "styled-components";
import GridItem from "./GridItem.jsx";
import {useEffect} from "react";
import initAOS from "../aos/aos.js";

import AOS from "aos";
import breakpoints from "../styles/breakpoints.jsx";


const StyledGrid = styled.section`

  display: grid;
  grid-template-columns: 1fr;
  //grid-template-rows: 1fr 1fr;
  //border: 1px solid darkred;
  width: 90%;
  margin: 0 auto;
  grid-column-gap: 5px;
  grid-row-gap: 10px;

  ${breakpoints.desktop(css`
    margin-block: 20px;
    //background-color: red;
    //grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    //grid-template-rows: 1fr 1fr 1fr 1fr;
  `)}


`

const WrapperContainer = styled.div`

  display: grid;


  ${breakpoints.desktop(css`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `)}



`


const Grid = ({data, title,}) => {

    useEffect(() => {
        initAOS()

    }, []);


    return (
        <StyledGrid>

            {/* TODO section#card-wrapper>article#c$.card*6>h2{Card Title $}+p*2>lorem^a*/}

            <h1>{title}</h1>

            <WrapperContainer className="project-wrapper">

                {data ?
                    (
                        data.map((item,index)=>{

                                return (
                                    <GridItem
                                        description={item.description}
                                        href={item.href}
                                        imgSrc={item.imageUrl}/>
                                )

                            })
                    )
                    : null}


            </WrapperContainer>

        </StyledGrid>
    )
}

export default Grid

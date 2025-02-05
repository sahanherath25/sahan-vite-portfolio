import styled, {css} from "styled-components";
import GridItem from "./GridItem.jsx";
import {useEffect} from "react";
import initAOS from "../aos/aos.js";

import AOS from "aos";
import breakpoints from "../styles/breakpoints.jsx";


const StyledGrid = styled.div`


  display: grid;

  //border: 1px solid darkred;
  width: 90%;

  margin: 0 auto;
  grid-column-gap: 5px;
  grid-row-gap: 10px;

  ${breakpoints.desktop(css`

    //background-color: red;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `)}


`

const WrapperContainer = styled.div`

  display: grid;

`



const Grid = ({data}) => {

    useEffect(() => {
        initAOS()

    }, []);

    return (
        <StyledGrid>

            {/* TODO section#card-wrapper>article#c$.card*6>h2{Card Title $}+p*2>lorem^a*/}

            <GridItem
                description={"This is a React Application for Pizza Ordering Website Using React"}
                href={"https://crave-crust-sahan.netlify.app/"}
                imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project2.jpeg"}/>

            <GridItem
                imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/Project1.jpeg"}/>
            <GridItem
                imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project3.jpeg"}/>
            <GridItem
                imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project4.jpeg"}/>

        </StyledGrid>
    )
}

export default Grid

import styled,{css} from "styled-components";
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
  
  ${breakpoints.desktop( css`
  
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
        <StyledGrid >



            {/*{data? (*/}
            {/*    data.map(() => {*/}
            {/*        return (*/}
            {/*            <GridItem/>*/}
            {/*        )*/}
            {/*    })*/}
            {/*) : <h1 data-aos={"flip-left"}>No Data For the Grid</h1>}*/}

            <GridItem imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/Project1.jpeg"}/>
            <GridItem imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project2.jpeg"}/>
            <GridItem imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project3.jpeg"}/>
            <GridItem imgSrc={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/project4.jpeg"}/>

        </StyledGrid>
    )
}

export default Grid

import styled from "styled-components";
import GridItem from "./GridItem.jsx";
import {useEffect} from "react";
import initAOS from "../aos/aos.js";

import AOS from "aos";

const StyledGrid = styled.div`


  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid darkred;
  width: 90%;
  margin: 0 auto;
  grid-column-gap: 5px;

`

const WrapperContainer = styled.div`
    
    display: grid;

`

const Grid = ({data}) => {

    useEffect(() => {
        initAOS()
        AOS.refreshHard()

    }, []);

    return (
        <StyledGrid data-aos={"flip-left"}>

            {/*{data? (*/}
            {/*    data.map(() => {*/}
            {/*        return (*/}
            {/*            <GridItem/>*/}
            {/*        )*/}
            {/*    })*/}
            {/*) : <h1 data-aos={"flip-left"}>No Data For the Grid</h1>}*/}

            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>

        </StyledGrid>
    )
}

export default Grid

import React from "react";
import styled, {css} from "styled-components";
import {Outlet} from "react-router-dom"
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import StyledHeader from "./StyledHeader.jsx";
import Footer from "./Footer.jsx";
import breakpoints from "../styles/breakpoints.jsx";

const StyledAppLayout = styled.div`
  
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr; /* Single column layout */
  grid-template-rows: auto 1fr auto; /* Header, Main (flexible), Footer */
  max-width: 100%;
  width: 100%;
  
`

const Main=styled.main`
  
  overflow-y: auto;
  //border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr ;
  max-width: 100%;
  width: 100%; /* Ensure no overflow */
  
`

const Container = styled.div`
  
  max-width: 100vw;

  ${breakpoints.desktop(css`
    max-width: 100%;
  `)}
  
`

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <StyledHeader/>
            <Main>
                <Container  >
                    <Outlet/>
                </Container>
                <Footer/>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout
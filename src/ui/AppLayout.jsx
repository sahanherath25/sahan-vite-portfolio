import React from "react";
import styled, {css} from "styled-components";
import {Outlet} from "react-router-dom"
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import StyledHeader from "./StyledHeader.jsx";
import Footer from "./Footer.jsx";

const StyledAppLayout = styled.div`
  
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr; /* Single column layout */
  grid-template-rows: auto 1fr auto; /* Header, Main (flexible), Footer */
  
  
`

const Main=styled.main`

  overflow-y: auto;

`

const Container = styled.div`
  
`

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <StyledHeader/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
                <Footer/>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout
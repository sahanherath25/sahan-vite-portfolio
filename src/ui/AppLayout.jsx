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
  //grid-template-columns: 1fr;
  grid-template-columns: 1fr; /* Single column layout */
  grid-template-rows: auto 1fr auto; /* Header, Main (flexible), Footer */
  
  //grid-template-rows: auto 1fr;
  //border: 1px solid darkred;
  //margin: 1px;
`

const Main=styled.main`
  //background-color: navajowhite;
  //padding: 4rem 4.8rem 6.4rem;
  //overflow: scroll;
  overflow: auto;
  //border: 1px solid navy;
`

const Container = styled.div`
  //max-width: 120rem;
  //margin: 0 auto;
  //display: flex;
  //flex-direction: column;
  //gap: 3.2rem;
  
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
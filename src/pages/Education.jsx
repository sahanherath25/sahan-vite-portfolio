import React from "react";
import {styled, css} from "styled-components";
import {Button} from "@mui/material";
import breakpoints from "../styles/breakpoints.jsx";
import Profile from "../assets/images/sahan-profile.jpeg"

const StyledMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  justify-content: space-around;
  margin-top: 80px;
  background-color: #fff;
  position: relative;
  position: relative;
  //color: white;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(224, 122, 95, 0.5);
    z-index: 1;

  }


  ${breakpoints.desktop(css`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0 auto;
    padding: 100px;
  `)}
  & > :first-child {
    //padding: 10px;
  }

  & > :nth-child(2) {
    //padding: 20px;

  }

  & > :nth-child(3) {
    //align-self: flex-start;
  }
`

const Row = styled.div`
  background-color: yellow;
  margin: 5px;
  width: 300px;

`


const Card = styled.section`
  width: 450px;
  border: 1px solid red;
  background-color: yellowgreen;

  img {
    object-fit: cover;
    width: 100%;
  }


`

const Hero = styled.section`

  display: grid;
  grid-template-columns: 1fr 1fr;

`
const ImageContainer = styled.div`
    grid-column-start: 2;
  grid-column-end: 3;
    
`
const Image = styled.img`

  width: 100%;
  height: 100%;
  object-fit: cover;

`


const ContentWrapper = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-block-start: 100px;
  border: 1px solid white;
`

const H1 = styled.h1`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-column: 1/4;
  border: 1px solid red;

`

const EducationPage = () => {
    return (
        <StyledMainContainer>

            <Hero className="content__wrapper">

                <div className="content__wrapper--left--container">
                    <h1>Smart Learning</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum explicabo facilis fuga nemo
                        repellat saepe. Aut cupiditate deserunt dolor ducimus impedit, in incidunt maxime nemo nobis
                        reiciendis repudiandae voluptatem
                    </p>
                    <div className="btn-wrapper">
                        <button>Start Here</button>
                        <button>Start Here</button>
                    </div>

                </div>
                <ImageContainer className="content__wrapper--right--container">
                    <Image src={Profile} alt=""/>
                </ImageContainer>

            </Hero>

            {/*<ContentWrapper>*/}

            {/*    <H1>Our Features Special For You</H1>*/}
            {/*    <Card>*/}
            {/*        <img*/}
            {/*            src={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies//aws-logo.png"}*/}
            {/*            alt="test image"/>*/}
            {/*        <div className="content">*/}
            {/*            <h2>On Demand</h2>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, totam!</p>*/}
            {/*        </div>*/}
            {/*    </Card>*/}
            {/*</ContentWrapper>*/}

            {/*<Card>*/}
            {/*    <img*/}
            {/*        src={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies//aws-logo.png"}*/}
            {/*        alt="test image"/>*/}
            {/*    <div className="content">*/}
            {/*        <h2>On Demand</h2>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, totam!</p>*/}
            {/*    </div>*/}
            {/*</Card>*/}

            {/*<Card>*/}
            {/*    <img*/}
            {/*        src={"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies//aws-logo.png"}*/}
            {/*        alt="test image"/>*/}
            {/*    <div className="content">*/}
            {/*        <h2>On Demand</h2>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, totam!</p>*/}
            {/*    </div>*/}
            {/*</Card>*/}

            {/*<Button>Savings Plan</Button>*/}

            {/*section.section*3>img{saha}+.content>h1{hello guys}+p{testing in wrost i dont like that}*/}


        </StyledMainContainer>
    )
}

export default EducationPage
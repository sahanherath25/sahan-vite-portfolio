import React from "react";
import styled from "styled-components";


const StyledContainer = styled.section`

  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 50px auto;
  //border: 1px solid red;
  flex-direction: column;
`


const StyledLeftContainer = styled.div`
  align-self: flex-start;
  margin-block-start: 50px;
  //border: 1px solid yellowgreen;

`

const StyledMiddleContainer = styled.div`
  margin-block-start: 50px;
  align-self: center;
  //border: 1px solid red;
`

const StyledRightContainer = styled.div`
  margin-block-start: 50px;
  padding-block-start: 100px;
  align-self: flex-end;
  //border: 1px solid red;
  max-width: 50%;
`


//
// const StyledContainer=styled.section`
//
// `

const Skills = () => {
    return (
        <StyledContainer>
            <StyledLeftContainer className={"left-container"}>
                <div className="">
                    <div className="">
                        <h2>Yes you're Right</h2>
                        <p>Im a JavaScript Expert</p>
                    </div>
                </div>
            </StyledLeftContainer>
            <StyledMiddleContainer className={"middle-container"}>
                <div className="col-md-4">
                    <img
                        src={"https://static.vecteezy.com/system/resources/thumbnails/028/735/086/original/diverse-multi-ethnic-team-in-office-indian-female-and-black-male-it-programmers-working-on-desktop-computer-specialists-creating-software-engineers-developing-app-program-shifting-rack-focus-free-video.jpg"}
                        alt="svg icon" height={200} className={"w-100"}/>
                </div>
            </StyledMiddleContainer>
            <StyledRightContainer className={"right-container"}>
                <div className="col-md-4 ">
                    <div className="n-box-2 px-3 py-5">
                        <p className={"bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia,
                            praesentium? Animi
                            architecto deserunt dignissimos distinctio doloribus facilis, nulla odio optio quisquam,
                            repudiandae suscipit totam!
                        </p>
                    </div>

                </div>
            </StyledRightContainer>
        </StyledContainer>
    )
}

export default Skills
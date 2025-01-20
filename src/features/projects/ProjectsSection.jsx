import React, {forwardRef, useState} from "react";
import styled from "styled-components";
import Experiences from "../../ui/Experiences.jsx";
import Experience from "../../ui/Experience.jsx";


const StyledContainer = styled.div`

  background-color: #001220;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 100px;
  color: whitesmoke;
  align-items: flex-start;


`

const LeftContainer = styled.div`
  //background-color: aqua;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  & > :first-child {
    //grid-column: 1/2;
    //grid-row: 1/3;
    //background-color: yellow;

  }


`

const ButtonGroup = styled.div`
  margin-block-start: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;

`

const Button = styled.button`

  opacity: 0.6;
  margin-inline-start: 4px;
  color: whitesmoke;
  padding-left: 50px;
  position: relative;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease, transform 0.3s ease, right 0.3s ease;

  &:hover {
    right: -10px;
    opacity: 1;
    background-color: transparent;
    transform: scale(1.05) translateX(40px);

  }

  &::before {
    opacity: 0.6;
    content: "";
    position: absolute;
    left: 5px;
    width: 30px;
    height: 2px;
    background-color: white;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    //background-color: red; // Change line background color
  }

`


const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const RightContainer = styled.div`
  //background-color: red;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  font-size: 40px;
`

const H3 = styled.h3`
  font-size: 30px;
  opacity: 0.8;
`

const P = styled.p`
  
  margin-block-start: 8px;
  color: whitesmoke;
  opacity: 0.7;
  
`

const InnerRightWrapper=styled.div`


`

const ProjectsSection =forwardRef( ({ techHandle, sahan }, ref) => {

    const [isVisible, setIsVisible] = useState(false);

    // console.log("PROJECSTS REF",sahan)
    // console.log("PROJECSTS REF",techHandle)

    const handleClick=()=>{

        techHandle()
    }


    return (
        <StyledContainer as={"section"} ref={ref}    >

            <LeftContainer >
                <H1>Sahan Herath </H1>
                <H3>Software Engineer</H3>
                <P>I Build pixel Perfect Engaging And Acessible digitial EXperiences</P>


                <ButtonGroup>
                    <Button>About</Button>
                    <Button>Experience</Button>
                    <Button>Projects</Button>
                    <Button onClick={handleClick}>Tech Stack</Button>
                </ButtonGroup>
            </LeftContainer>
            <RightContainer>

                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam deleniti dignissimos
                        dolore dolorem dolores ea earum, harum impedit ipsa itaque, libero obcaecati placeat possimus
                        provident quisquam sapiente? Animi asperiores culpa cum cumque, cupiditate delectus, dolore dolorem
                        ea eaque eligendi facilis iste itaque natus nulla, optio porro quos repudiandae sapiente voluptas
                    </P>

                    <P>
                        laudantium magni, nam nemo officiis pariatur provident quisquam rerum sequi ullam unde vitae
                        voluptate. Ad alias atque aut cumque error facilis harum itaque libero natus obcaecati officia
                        pariatur perferendis possimus provident similique sint, ut veritatis? Aliquam at consectetur eius
                        error et ex laborum ratione sit ullam? Beatae mollitia nisi provident ullam velit voluptas. Commodi
                        consequatur, doloribus in nemo repudiandae vel! Ab adipisci aliquam aperiam consequuntur, dolor
                        dolore expedita fuga incidunt inventore iusto laboriosam laborum libero, maiores mollitia neque non
                    </P>

                    <P>
                        nulla, optio quia recusandae rem repellat ullam vel voluptatem! Deserunt ipsam magni perferendis
                        quidem. Ad delectus earum hic impedit mollitia nulla quis repellat repudiandae. Culpa doloribus
                        fugiat, illo magnam minus officiis porro quo!
                    </P>

                <Experiences>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                </Experiences>


            </RightContainer>

        </StyledContainer>
    )
})

export default ProjectsSection
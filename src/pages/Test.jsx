import React from "react";
import styled from "styled-components";



const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid darkred;
  
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`


const StyledWrapper=styled.section`
  
  width: 928px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  //grid-template-rows: auto 400px auto;
  padding: 100px;
  border: 1px solid darkred;
  
  & >:nth-child(1){
    grid-column: 1/3;
  }  
  
  
  & >:nth-child(2){
    
    grid-column: 1/3;
    grid-row: 2/6;
    background-color: red;
    //justify-self: stretch;

    
    img{
      border: 1px solid orangered ;
    }
    
  }  
  
  & >:nth-child(3){
    
    background-color: yellowgreen;
    grid-column: 1/3;
    //grid-row: 2/3;
  }   
  
  & >:nth-child(4){
    grid-column: 2/3;
    grid-row: 2/3;
    
  }  
  
  & >:last-child{
    grid-column: 1/3;
  }
  
  
`

const Test=()=>{
    return(
        <StyledWrapper>

            <ImageContainer>
                <Image
                    src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt=""/>
            </ImageContainer>

            <ImageContainer>
                <h1>Heloo sahan</h1>
                {/*<Image*/}
                {/*    src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}*/}
                {/*    alt=""/>*/}
            </ImageContainer>

            <ImageContainer>
                <h3>hellow  Yellow</h3>
                <Image
                    src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt=""/>
            </ImageContainer>

            <ImageContainer>
                <Image
                    src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt=""/>
            </ImageContainer>

            <ImageContainer>
                <Image
                    src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt=""/>
            </ImageContainer>


        </StyledWrapper>
    )
}

export default Test
import React, {forwardRef} from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`


  ${(props) => props.variation === "primary" && css`
    background-color: whitesmoke;
    font-weight: bold;
    height: 45px;
    border-radius: 20px;
    border: none;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    width: 50%;
  `}
  &:hover {
    cursor: pointer;
  }

  ${(props) => props.position === "center" && css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `}
  
  &>svg:hover{
    color: red;
  }



`

const Button = forwardRef(({type = "button", children, width, onClick,position,size}, ref) => {
    return (
        <StyledButton onClick={onClick} type={type} position={position} size={size}>
            {children}
        </StyledButton>
    )
})

StyledButton.defaultProps = {
    variation: "primary",
    type: "button"
}

export default Button
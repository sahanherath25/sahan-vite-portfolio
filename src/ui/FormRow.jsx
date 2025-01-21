import styled from "styled-components";
import {MdError} from "react-icons/md";
import {colorEffectAnimation, colorEffectAnimationForFormError} from "../styles/animations.js";


const StyledFormRow = styled.div`

  display: grid;
  align-items: center;
  grid-template-columns:  1fr;
  gap: 2.4rem;
  margin-block-end: 20px;
  

`

const Error=styled.span`
  
  animation: ${colorEffectAnimationForFormError} 4s infinite linear;
`

const Label=styled.label`
    
`



const FormRow = ({label,error,children}) => {

    return (
        <StyledFormRow>
            {label && <Label>{label}</Label>}
            {children}
            {error && <Error> <MdError /> {error.message}</Error>}
        </StyledFormRow>

    )
}

export default FormRow
import styled from "styled-components";


const StyledFormRow = styled.div`

  display: grid;
  align-items: center;
  grid-template-columns:  1fr;
  gap: 2.4rem;
  margin-block-end: 20px;
  

`

const Error=styled.span`
    
`

const Label=styled.label`
    
`



const FormRow = ({label,error,children}) => {

    return (
        <StyledFormRow>
            {label && <Label>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>

    )
}

export default FormRow
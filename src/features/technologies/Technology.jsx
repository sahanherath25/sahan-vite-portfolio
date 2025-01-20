import styled from "styled-components";

const StyledTechnology = styled.div`

  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid whitesmoke;
  margin: 10px;
  border-radius: 10%;
  gap: 5px;
`

const Technology = ({children}) => {


    return (
        <StyledTechnology>
            {children}
        </StyledTechnology>
    )
}


export default Technology
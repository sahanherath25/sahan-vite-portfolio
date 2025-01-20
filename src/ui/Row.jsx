import styled, {css} from "styled-components";

const Row = styled.div`

  display: flex;
  
  ${(props) => {
    return props.type === "horizontal" && css`

      justify-content: space-around;
      align-items: center;
    `
  }}

  ${(props) => {
    return props.type === "vertical" && css`
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      max-width: 1200px;
      margin: 0 auto;
    `
  }}
  
  


  
  


`

Row.defaultProps = {
    type: "vertical"
}

export default Row;
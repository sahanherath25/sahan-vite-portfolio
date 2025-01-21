import styled from "styled-components";
import {boxShadowEffectAnimation} from "../styles/animations.js";

const FileInput=styled.input.attrs({type:"file"})`
  

  background-color: transparent;
  //border-bottom: 1px solid whitesmoke;
  color: #fff;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #a0a0a0;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    background-color: #0e0d0d;
  }

  &:focus {
    background-color: #0e0d0d;
    box-shadow: 0 0 5px #007bff;
    //animation: ${boxShadowEffectAnimation};
    &::placeholder {
      color: transparent;
    }
  }
  

`

export default FileInput

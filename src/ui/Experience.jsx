import React, {useState} from "react";
import {styled,css} from "styled-components";
import {VscWorkspaceTrusted} from "react-icons/vsc";
import breakpoints from "../styles/breakpoints.jsx";
// import {getMonthRange} from "../utils/dateConvertions.js";



const StyledContainer = styled.div`
  
  position: relative;
  margin-block-start: 40px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background-color: #001220;
  gap:20px;

  ${breakpoints.desktop(css`
    display: flex;
    flex-direction: row;
  `)}

  &:last-child {
    margin-block-end: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &:hover::before {
    //opacity: 0.1;
  }

  &:hover {

    .content {
      h3 {
        color: #00FFCA;
      }

    }
    .period {
      h3 {
        background-color: red;
        color: #00FFCA;
      }
    }

  }

  .period {
    display: flex;
    justify-content: center;
    gap: 15px;
    

    h4 {
      color: #948c8c;
      font-size: 24px;
    }
    
    flex-basis: 30%;
    
    &:hover{

    }
  }

  .content {
    flex-basis: 70%;

    h3 {
      color: white;
      width: 100%;
      font-size: 24px;
      transition: color 0.5s ease-in-out;
    }

    p {
      color: #948c8c;
    }

  }


`


const Experience = ({data}) => {

    const [bgStyle, setBgStyle] = useState({});

    console.log("MY DATA ",data)

    const handleMouseMove = (e) => {

        // console.log("E", e)

        const {clientX, clientY, currentTarget} = e;
        const {left, top} = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        setBgStyle({
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 100, 0, 0.1), transparent 70%)`

        });
    };

    if(!data){
        return
    }
    const {achievement_1,position,start_date,end_date}=data;


    // const period=getMonthRange(start_date,end_date);

    // console.log("PERIOS ",period)


    return (
        <StyledContainer className={" experiences"} onMouseMove={handleMouseMove} style={bgStyle} onMouseLeave={()=>setBgStyle({})} >
            <div className="period">
                    <VscWorkspaceTrusted  size={30}/>
                    <h4> Professional Experience</h4>

            </div>
            <div className="content">
                <h3>{position}</h3>
                <p>{achievement_1?achievement_1:null}</p>
            </div>
        </StyledContainer>
    )
}

export default Experience
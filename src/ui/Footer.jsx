import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import {FaFacebook, FaGithub, FaLinkedin, FaReact, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {BiLogoNetlify} from "react-icons/bi";
import {AiFillThunderbolt} from "react-icons/ai";
import {SiGmail} from "react-icons/si";

// Animation for hover effect
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  }
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Styled components
const FooterWrapper = styled.footer`

  background: linear-gradient(135deg, #001220, #001220);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  grid-row:-1/3 ;
  

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1rem;
    position: sticky;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #f6f6f6;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      //animation: ${glow} 0.6s infinite alternate;
      transform: scale(1.1);
    }
  }
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 2rem;
    color: #f6f6f6;
    transition: all 0.3s ease;

    &:hover {
      animation: ${glow} 0.6s infinite alternate;
      transform: translateY(-5px);
    }
  }
`;

const PoweredByText = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: orangered;
  font-weight: bold;
  //animation: ${blink} 1s infinite;
  align-self: center;
`;

const FooterText = styled.p`
  font-size: 1.5rem;
  opacity: 0.8;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const WrapperSection = styled.section`
  background: linear-gradient(135deg, #001220, #001220);
  color: #fff;
  display: flex;
  flex-direction: column;
`

// Footer Component
const Footer = () => {
    return (

        <FooterWrapper>
            <FooterLinks>
                <Link to={"/"}>Home</Link>
                <Link to="#about">About</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link href="#contact">Contact</Link>
            </FooterLinks>
            <WrapperSection>
                <FooterSocials>
                    <a href="https://github.com/sahanherath25" target="_blank" rel="noopener noreferrer">
                        <SiGmail />
                    </a>
                    <a href="https://github.com/sahanherath25" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/sahanherath25/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok/>
                    </a>
                </FooterSocials>
                <PoweredByText>
                    <AiFillThunderbolt color={"#BE3144"}/> Powered by <FaReact/> React and <BiLogoNetlify/> Netlify
                </PoweredByText>
            </WrapperSection>

            <FooterText>©{new Date().getFullYear()} Sahan Herath. All rights reserved.</FooterText>
        </FooterWrapper>


    );
};

export default Footer;

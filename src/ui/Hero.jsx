import React, {forwardRef} from "react";
import Experiences from "./Experiences.jsx";
import Experience from "./Experience.jsx";
import initAOS from "../aos/aos.js";

const Hero = ({dataAOS,dataAOS2}) => {


    initAOS()

    return (
        <div   className={"hero-container"} >
            <div className="content-wrapper">
                <div className="left-container"   >

                    <h2 className="h2-name">Sahan Herath</h2>
                    <h4>Frontend Web Developer</h4>

                    <div className="description-1">
                        Passionate about creating intuitive and engaging user experiences on the web
                    </div>

                    <div className="navigation-links">
                        <a href="./" className="about link">About</a>
                        <a href="./" className="experience link">Experience</a>
                        <a href="./" className="projects link">Projects</a>
                    </div>
                </div>
                <div className="right-container"  >
                    <div className="description">
                        <p>Hi, I’m Sahan Herath, a dedicated Frontend Web Developer with a passion for creating visually
                            stunning and highly responsive web applications. With a strong foundation in HTML, CSS, and
                            JavaScript, I specialize in building seamless digital experiences that captivate users and
                            drive engagement.
                        </p>
                        <p>
                            My journey in web development began with a fascination for technology and an innate
                            problem-solving mindset. Over the years, I have honed my skills in various frontend
                            frameworks and libraries, including React and Angular. I thrive on transforming complex
                            requirements into elegant, user-friendly interfaces that exceed client expectations.

                        </p>

                        <p>
                            Ab accusantium ad amet assumenda at consequuntur doloribus ex, illo
                            in labore magnam nam nisi nobis odit pariatur placeat quaerat quia quidem quisquam quo quos
                            similique veritatis. Aut, error modi quis repudiandae tempore vero.

                        </p>

                    </div>
                    <Experiences>
                        <Experience/>
                        <Experience/>
                        <Experience/>
                        <Experience/>
                    </Experiences>
                </div>

            </div>
        </div>
    )
}

export default Hero
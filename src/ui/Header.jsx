import React, {useState} from "react";
import { RiMenuFill,RiCloseFill } from "react-icons/ri";
import "./Header.module.scss"
import {Link} from "react-router-dom";




const Header=()=>{

    const [showHeader,setShowHeader]=useState(false);
    const path=window.location.pathname;

    console.log("Path ",path)

    return(
        <div className={"header"}>

            {
                showHeader?<RiCloseFill onClick={()=>setShowHeader(!showHeader)} className={"position-fixed top-0 end-0 menu-icon "} />:
                    <RiMenuFill onClick={()=>setShowHeader(!showHeader)}  className={"position-fixed top-0 end-0 menu-icon "} />
            }

            <ul className={`${showHeader?"show-header ":"hide-header hide"} n-box1`}>
                <li className={`${path === '/' && 'active'}`}><Link to={"/"}>Home</Link></li>
                <li className={`${path === '/projects' &&  'active'}`}><Link to={"/projects"}>Projects</Link></li>
                <li className={`${path==='/courses' && 'active'}`}><Link to={"/courses"}>Courses</Link></li>
                <li className={`${path==='/contact' && 'active'}`}><Link to={"/contact"}>Contact</Link></li>
                <li className={`${path==='/test' && 'active'}`}><Link to={"/Test"}>Test</Link></li>
                <li className={`${path==='/geoLocation' && 'active'}`}><Link to={"/geoLocation"}>Location</Link></li>
            </ul>

        </div>
    )
}

export default Header
import React from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AppLayout from "../ui/AppLayout.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Courses from "./Courses.jsx";
import Projects from "./Projects.jsx";

import{AnimatePresence} from "framer-motion";

const AnimatorRoutes=()=>{

    const location=useLocation()

    return(
        <AnimatePresence>
            <Routes location={location}>
                <Route element={<AppLayout/>}>
                    <Route path={"/"} element={<Navigate replace to={"home"}/>}/>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"contact"} element={<Contact/>}/>
                    <Route path={"courses"} element={<Courses/>}/>
                    <Route path={"projects"} element={<Projects/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatorRoutes
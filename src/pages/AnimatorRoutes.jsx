import React, {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AppLayout from "../ui/AppLayout.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Courses from "./Courses.jsx";
import Projects from "./Projects.jsx";

import{AnimatePresence} from "framer-motion";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
    }, [pathname]);

    return null; // This component doesn't render anything
};

const AnimatorRoutes=()=>{

    const location=useLocation()

    return(
        <AnimatePresence>
            <ScrollToTop />
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
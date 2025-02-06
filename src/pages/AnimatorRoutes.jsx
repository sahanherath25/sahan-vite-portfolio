import React, {lazy, useEffect, Suspense} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Loader from "../ui/Loader.jsx";
import Spinner from "../ui/Spinner.jsx";


// import AppLayout from "../ui/AppLayout.jsx";
// import Home from "./Home.jsx";
// import Contact from "./Contact.jsx";
// import Courses from "./Courses.jsx";
// import Projects from "./Projects.jsx";

//TODO Code Splitting

const Home = lazy(() => import("../pages/Home.jsx"))
const Contact = lazy(() => import("../pages/Contact.jsx"))
const Courses = lazy(() => import("../pages/Courses.jsx"))
const AdminPage = lazy(() => import("../pages/AdminPage.jsx"))
const Projects = lazy(() => import("../pages/Projects.jsx"))
const AppLayout = lazy(() => import("../ui/AppLayout.jsx"))


const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
    }, [pathname]);
    return null; // This component doesn't render anything
};

const AnimatorRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence>
            <ScrollToTop/>
            <Suspense fallback={<Spinner/>}>
                <Routes location={location}>
                    <Route element={<AppLayout/>}>
                        <Route path={"/"} element={<Navigate replace to={"home"}/>}/>
                        <Route path={"home"} element={<Home/>}/>
                        <Route path={"contact"} element={<Contact/>}/>
                        <Route path={"courses"} element={<Courses/>}/>
                        <Route path={"projects"} element={<Projects/>}/>
                        <Route path={"admin"} element={<AdminPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}

export default AnimatorRoutes
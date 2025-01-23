import {useEffect, useState} from 'react'

import {BrowserRouter, Route, Routes,Navigate,useLocation} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Courses from "./pages/Courses.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import initAOS from "./aos/aos.js";
import "./styles/mixins/_mixins.scss"
import Test from "./pages/Test.jsx";
import AOSConfig from "./aos/aos.js";
import AnimatorRoutes from "./pages/AnimatorRoutes.jsx";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000
        }
    }
});


function App() {

    // useEffect(()=>{
    //     new AOSConfig()
    // })


    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <GlobalStyles/>
                <BrowserRouter>

                    <AnimatorRoutes/>
                </BrowserRouter>

        </QueryClientProvider>

    )
}

export default App

// <BrowserRouter>
// <Routes>
// <Route element={<AppLayout/>}>
// <Route path={"/"} element={<Navigate replace to={"home"}/>}/>
// <Route path={"home"} element={<Home/>}/>
// <Route path={"contact"} element={<Contact/>}/>
// <Route path={"courses"} element={<Courses/>}/>
// <Route path={"projects"} element={<Projects/>}/>
// </Route>
// </Routes>
// </BrowserRouter>
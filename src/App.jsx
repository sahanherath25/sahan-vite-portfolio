import {useEffect, useState} from 'react'

import {BrowserRouter, Route, Routes, Navigate, useLocation} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles.js";
import initAOS from "./aos/aos.js";
import "./styles/mixins/_mixins.scss"
import Test from "./pages/Test.jsx";
import AOSConfig from "./aos/aos.js";

import AnimatedCursor from "react-animated-cursor";
import React from "react";
import AnimatorRoutes from "./pages/AnimatorRoutes.jsx";
import WaterWaveComponent from "./VisualEffects/WaterWave.jsx";
import WaterWaveWrapper from "./VisualEffects/WaterWave.jsx";

import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000
        }
    }
});


function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <GlobalStyles/>
                <BrowserRouter>
                    <AnimatorRoutes/>
                </BrowserRouter>
                <Toaster
                    position={"top-center"}
                    gutter={12}
                    containerStyle={{margin: "8px"}}
                    toastOptions={{
                        success: {
                            duration: 3000
                        },
                        error: {
                            duration: 3000
                        },
                        style: {
                            fontSize: "16px",
                            maxWidth:"600px",
                            padding:"16px 24px",
                            backgroundColor: "var(--color-grey-8)",
                            color: "var(--color-grey-700)"
                        }
                    }}
                />
            </QueryClientProvider>
        </>

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
import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


//Imports Components
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Index from "../Pages/Index/Index";
import LoadingBar from "react-top-loading-bar";
import Test from '../Pages/Testing/Test'

export default function AppRoutes() {
    //States
    const [progress, setProgress] = useState(0);

    return (
        <HelmetProvider>
            <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} height={4} className="br-max" />
            <Routes>
                <Route path="/" element={<Index setProgress={setProgress} />} />
                <Route path="/Test" element={<Test setProgress={setProgress}/>} />
                <Route path="*" element={<PageNotFound setProgress={setProgress} />} />
            </Routes>
        </HelmetProvider>
    )
}
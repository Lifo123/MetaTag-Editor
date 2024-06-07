import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


//Imports Components
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Index from "../Pages/Index/Index";
import LoadingBar from "react-top-loading-bar";
import Test from '../Pages/Testing/Test'

import { useLoad } from "../hooks/useLoading/useLoad";

export default function AppRoutes() {
    //States
    const {progress, setProgress} = useLoad(10);

    return (
        <HelmetProvider>
            <LoadingBar color="#0963d1" progress={progress} onLoaderFinished={() => setProgress(0)} height={5} className="br-max"/>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Test" element={<Test />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HelmetProvider>
    )
}
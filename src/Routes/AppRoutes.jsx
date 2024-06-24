import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SuspenseWrapper from "../Components/SuspenseWrapper/SuspenseWrapper";

//Imports Components
const Index = lazy(() => import("../Pages/Index/Index"))
const PageNotFound = lazy(() => import("../Pages/PageNotFound/PageNotFound"));
const Editor = lazy(() => import('../Pages/Editor/Editor'))

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<SuspenseWrapper element={<Index />} />} />
            <Route path="*" element={<SuspenseWrapper element={<PageNotFound />}/>} />

            <Route path="/Edit" element={<SuspenseWrapper element={<Editor />}/>} />

        </Routes>
    )
}
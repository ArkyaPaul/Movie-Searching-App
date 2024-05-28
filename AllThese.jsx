import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Trying from "./Trying";
import ShowMore from "./ShowMore";
import SearchBar from "./SearchBar";
export default function AllThese(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<><SearchBar/></>}></Route>
                        <Route path="/:name" element={<><SearchBar/><Trying/></>}></Route>
                        <Route path="/:name/:id" element={<><SearchBar/><ShowMore/></>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
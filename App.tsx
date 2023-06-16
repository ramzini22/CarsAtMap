import Router from './src/Routes/index'
import React, {useContext, useState} from "react";
import CarContext from "./src/Contexts/CarContext";

export default function App() {
    return (
        <CarContext>
            <Router/>
        </CarContext>
    )
}
import Router from './src/Routes/index'
import React, {useContext, useState} from "react";
import CarContext from "./src/Contexts/CarContext";
import LanguageContext from "./src/Contexts/LanguageContext";

export default function App() {
    return (
        <CarContext>
            <LanguageContext>
                <Router/>
            </LanguageContext>
        </CarContext>
    )
}
import Router from './src/Routes/index'
import React from "react";
import CarContext from "./src/Contexts/CarContext";
import LanguageContext from "./src/Contexts/LanguageContext";
import MainLayout from "./src/Screens/Layouts/MainLayout";

export default function App() {
    return (
        <MainLayout>
            <CarContext>
                <LanguageContext>
                    <Router/>
                </LanguageContext>
            </CarContext>
        </MainLayout>

    )
}
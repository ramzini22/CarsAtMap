import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import {Button, View} from "react-native";
import Title from "../../Components/Title";
import {useLanguageContext} from "../../Contexts/LanguageContext/hook";
import {style} from "./style";
const Settings = () => {
    const {language, setLanguage} =useLanguageContext()
    return (
        <MainLayout>
            <View style={style.main}>
                <Title>
                    {language.nav[2]}
                </Title>
                <Button title={language.settings.button} onPress={()=>setLanguage(language.lang=='rus'?'eng':'rus')} />
            </View>
        </MainLayout>
    );
};
export default Settings;
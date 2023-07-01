import React from 'react';
import {Button, View} from "react-native";
import Title from "../../Components/Title";
import {useLanguageContext} from "../../Contexts/LanguageContext/hook";
import {style} from "./style";

const Settings = () => {
    const {language, setLanguage} = useLanguageContext()
    return (
        <View style={style.main}>
            <Title>
                {language.nav[2]}
            </Title>
            <Button title={language.settings.button}
                    onPress={() => setLanguage(language.lang == 'rus' ? 'eng' : 'rus')}/>
        </View>
    );
};
export default Settings;
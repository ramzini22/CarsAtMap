import React, {useEffect, useState} from "react";
import {ILanguages} from "../../config/types";
import languages from '../../config/language.json'
import AsyncStorage from "@react-native-async-storage/async-storage";

// Context for language at all app
export const LanguageCreateContext = React.createContext<any>(null)
const LanguageContext = ({children}:{children:React.ReactNode}) => {

    const [language, setLanguage] = useState<ILanguages>('rus')

    useEffect(()=>{
        if(!language){
            AsyncStorage.getItem('lang').then(lang=> {
                if(lang === 'rus' || lang === 'eng')
                    setLanguage(lang)
                else
                    setLanguage('rus')
            })
        }
        else{
            AsyncStorage.setItem('lang', language)
        }
    }, [language])

    if(!language)
        return <></>

    return(
        <LanguageCreateContext.Provider value={{language:languages[language], setLanguage}}>
            {children}
        </LanguageCreateContext.Provider>
    )
};
export default LanguageContext;
import {useContext} from "react";
import {ILanguage} from "./types";
import {LanguageCreateContext} from "./index";

export const useLanguageContext = ()=>{
    const context = useContext<ILanguage>(LanguageCreateContext)
    return {...context}
}
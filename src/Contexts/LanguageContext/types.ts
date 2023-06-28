import {ILang, ILanguages} from "../../config/types";

export type ILanguage={
    language:ILang,
    setLanguage:(value:ILanguages)=>void
}
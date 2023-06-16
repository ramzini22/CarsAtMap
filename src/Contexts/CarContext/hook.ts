import {useContext} from "react";
import {IContextCar} from "./types";
import {CarCreateContext} from "./index";
export const useCarContext = ()=>{
    const context = useContext<IContextCar>(CarCreateContext)
    return {...context}
}
import React, {FC, useContext, useState} from "react";
import Router from "../../Routes";


export const CarCreateContext = React.createContext<any>(null)

const CarContext = ({children}:{children:React.ReactNode}) => {
    const [filter, setFilter] = useState<ICar[]>()
    return(
        <CarCreateContext.Provider value={{filter, setFilter}}>
            {children}
        </CarCreateContext.Provider>
    )
};

export default CarContext;
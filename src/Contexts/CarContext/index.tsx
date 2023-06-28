import React, {useState} from "react";
import carItems from '../../config/cars.json'

// Context for cars at all app
export const CarCreateContext = React.createContext<any>(null)
const CarContext = ({children}:{children:React.ReactNode}) => {
    const [cars, setFilter] = useState(carItems)
    return(
        <CarCreateContext.Provider value={{cars, setFilter, allCars:carItems}}>
            {children}
        </CarCreateContext.Provider>
    )
};

export default CarContext;
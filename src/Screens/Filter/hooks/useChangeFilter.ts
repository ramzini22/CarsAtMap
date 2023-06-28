import React from 'react';
import {useCarContext} from "../../../Contexts/CarContext/hook";
import {ICategoryCar} from "../../../config/types";

const UseChangeFilter = (kind:ICategoryCar) => {
    const {setFilter, allCars} = useCarContext()
    const onClick = ()=>{
        const newCars =
            kind=='ALL'?
                allCars
                : allCars.filter(element=>element.category == kind)
        setFilter(newCars)
    }
    return [onClick]
};

export default UseChangeFilter;
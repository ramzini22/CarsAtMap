import {ICar} from "../../config/types";

export type IContextCar={
    cars:ICar[]
    allCars:ICar[]
    setFilter:(cars:ICar[])=>void
}
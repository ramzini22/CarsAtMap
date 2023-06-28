import React from 'react';
import {Marker} from "react-native-maps";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {useCarContext} from "../../../Contexts/CarContext/hook";
import {useLanguageContext} from "../../../Contexts/LanguageContext/hook";
const UseCreateMarks = () => {
    const {cars} = useCarContext()
    const {language} = useLanguageContext()

    const locationOfInterest=    cars?.map(({id, ts, location:[latitude,longitude], category})=>({
        title:ts,
        location:{
            latitude,
            longitude
        },
        description:`${language.filter.items.category}: ${category}`,
        category
    }))

    return locationOfInterest.map((item, index)=>{
        return (
            <Marker
                coordinate={item.location}
                key={index}
                title={item.title}
                description={item.description}
            >
                {
                    (item.category=='B' && <FontAwesome5 name="car-side" size={20} color="black" />)
                    ||
                    (item.category=='C' && <MaterialCommunityIcons name="bus-side" size={30} color="black" />)
                    ||
                    (item.category=='D' && <MaterialCommunityIcons name="bus-double-decker" size={30} color="black" />)
                }
            </Marker>
        )
    })
};

export default UseCreateMarks;
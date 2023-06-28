import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ICar} from "../../../../config/types";
import {useLanguageContext} from "../../../../Contexts/LanguageContext/hook";
import {style} from "./style";
interface IProps extends ICar{
    index?:number
}
const Index:FC<IProps> = (car) => {
    const {language} =useLanguageContext()
    const {id, ts,user:{name},category, index} = car
    return (
        <View style={style.main}>
            {index &&
                <Text style={style.text}>
                    {index+') '}
                </Text>
            }
            <View>
                <Text style={style.text}>
                    {`${language.filter.items.name}: ${ts} # ${id}`}
                </Text>
                <Text style={style.text}>
                    {`${language.filter.items.userName}: ${name}`}
                </Text>
                <Text style={style.text}>
                    {`${language.filter.items.category}: ${category}`}
                </Text>
            </View>
        </View>
    );
};
export default Index;
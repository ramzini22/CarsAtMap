import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {style} from "./style";

type IProps={
    value?:string,
    children?:any
}
const Title:FC<IProps> = ({value, children}) => {
    return (
        <View style={style.view}>
            <Text style={style.text}>
                {value || children || ''}
            </Text>
        </View>
    );
};
export default Title;
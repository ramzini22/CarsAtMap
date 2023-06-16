import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import Messengers from "../../Screens/Home/helpers";


type PropsType={
    value:string,
    onChangeText:(value:string)=>void,
}
const Input:FC<PropsType> = ({value, onChangeText}) => {
    const styles = StyleSheet.create({
        inputView: {
            height: 'auto',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 22,
            marginTop: 30
        },
        inputView1: {
            padding: '2%',
        },
    })

    return (
        <View style={styles.inputView}>
            <TextInput
                placeholder='Введите ссылку'
                value={value}
                onChangeText={(newString) => onChangeText(newString)}
                style={{height: 'auto', fontSize: 16, color: 'red'}}/>
        </View>
    );
};

export default Input;
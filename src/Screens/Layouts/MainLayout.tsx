import React from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import cars from '../../config/cars.json'
const MainLayout = ({children}:any) => {
    return (
        <SafeAreaView style={styles.main}>
            {children}
        </SafeAreaView>
    );
};

export default MainLayout;

const styles: any = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
        minHeight: '100%'
    },
    container:{
        flex:1
    }
})

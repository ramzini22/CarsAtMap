import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import cars from '../../config/cars.json'
import {styles} from "./style";

// Hoc for style our background
const MainLayout = ({children}:any) => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.header} />
            {children}
        </SafeAreaView>
    );
};
export default MainLayout;
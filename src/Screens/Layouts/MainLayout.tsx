import React from 'react';
import {SafeAreaView, StatusBar} from "react-native";
import {styles} from "./style";
const MainLayout = ({children}:any) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle={'dark-content'} />
            {children}
        </SafeAreaView>
    );
};
export default MainLayout;
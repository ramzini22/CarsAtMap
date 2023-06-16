import React, {useEffect} from 'react';
import MainLayout from "../Layouts/MainLayout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../Routes";
import {useCarContext} from "../../Contexts/CarContext/hook";
type PropsType=NativeStackScreenProps<RootStackParams, 'Settings'>

const Settings = () => {

    return (
        <MainLayout>
        </MainLayout>
    );
};

export default Settings;
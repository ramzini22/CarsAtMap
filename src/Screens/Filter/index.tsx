import React, {FC} from 'react';
import {RootStackParams} from "../../Routes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import MainLayout from "../Layouts/MainLayout";

type PropsType=NativeStackScreenProps<RootStackParams, 'Params'>
const Index:FC<PropsType> = ({navigation, route}) => {
    return (
        <MainLayout>
        </MainLayout>
    );
};

export default Index;
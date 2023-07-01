import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Filter from "../Screens/Filter/index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign, Feather} from '@expo/vector-icons';
import Settings from "../Screens/Settings/Settings";
import Maps from "../Screens/Maps/Maps";
import {useLanguageContext} from "../Contexts/LanguageContext/hook";
import Car from '../Screens/Car/index'
import {ICar} from "../config/types";
export type RootStackParams={
    Maps:undefined
    Params:undefined
    Settings:undefined
    Car:ICar
}

const Index = () => {

    const Stack = createBottomTabNavigator<RootStackParams>();
    const {language} =useLanguageContext()

    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Maps'
                    screenOptions={{
                        tabBarInactiveTintColor:'black',
                        tabBarActiveTintColor:'red',
                        tabBarInactiveBackgroundColor:'white',
                        headerShown:false,
                    }}

                >
                    <Stack.Group
                        screenOptions={{
                            title: language.nav[0],
                            tabBarIcon: ({ color, size }) =>
                                <AntDesign name="search1" size={size} color={color} />,
                        }}
                    >
                        <Stack.Screen
                            name='Maps'
                            component={Maps}
                        />
                        <Stack.Screen
                            name='Params'
                            component={Filter}
                            options={{tabBarButton:() => null}}
                        />
                        <Stack.Screen
                            name='Car'
                            component={Car}
                            options={{tabBarButton:() => null}}
                        />
                    </Stack.Group>

                    <Stack.Screen
                        name='Settings'
                        component={Settings}
                        options={{
                            title: language.nav[2],
                            tabBarIcon: ({ color, size }) =>
                                <Feather name="settings" size={size} color={color} />,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default Index;
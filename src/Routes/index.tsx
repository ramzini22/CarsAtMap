import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from "../Screens/Home/Home";
import Filter from "../Screens/Filter/index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign, EvilIcons, Feather} from '@expo/vector-icons';
import Settings from "../Screens/Settings/Settings";

export type RootStackParams={
    Home:undefined
    Params:undefined
    Settings:undefined
}

const Index = () => {

    // const Stack = createNativeStackNavigator<RootStackParams>();
    const Stack = createBottomTabNavigator<RootStackParams>();

    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        tabBarInactiveTintColor:'black',
                        tabBarActiveTintColor:'red',

                        headerShown:false,

                        tabBarInactiveBackgroundColor:'white',
                        // tabBarActiveBackgroundColor:'black',

                    }}
                >
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            tabBarIcon: ({ color, size }) =>
                            <AntDesign name="search1" size={size} color={color} />,
                            title: 'Карты',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                        }}
                    />

                    <Stack.Screen
                        name='Params'

                        component={Filter}
                        options={{
                            tabBarIcon: ({ color, size }) =>
                                <AntDesign name="filter" size={size} color={color} />,
                            title:'Фильтры',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='Settings'

                        component={Settings}
                        options={{
                            tabBarIcon: ({ color, size }) =>
                                <Feather name="settings" size={size} color={color} />,
                            title:'Настройки',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default Index;
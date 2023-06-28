import React, {FC, useCallback} from 'react';
import {Button, Linking, Platform, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../Routes";
import Title from "../../Components/Title";
import MainLayout from "../Layouts/MainLayout";
import {useLanguageContext} from "../../Contexts/LanguageContext/hook";
import CarItem from "../Filter/Components/CarItem";
import MapView, {Marker} from "react-native-maps";
import {style} from "./style";
import {useLinkWats} from "./hooks";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";

type PropsType = NativeStackScreenProps<RootStackParams, 'Car'>

const Index: FC<PropsType> = ({navigation, route}) => {
    const {language} = useLanguageContext()
    const car = route.params
    const [phoneNumber] = useLinkWats(car) // hook for using correct link on What's Up
    const [latitude,longitude] = car.location
    return (
        <MainLayout>
            <Title>
                {language.car.title}
            </Title>
            <View style={style.main}>
                <View style={style.viewMap}>
                    <MapView style={style.map} region={{latitude, longitude, longitudeDelta: 0.01, latitudeDelta:0.001}}>
                        <Marker
                            coordinate={{latitude, longitude}}
                            title={car.ts}
                            description={`${language.filter.items.category}: ${car.category}`}
                        />
                    </MapView>
                </View>
                <View>
                    <View style={style.mainCar}>
                        <View>
                            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                <Text style={style.textCar}>
                                    {`${language.filter.items.category}: ${car.category}`}
                                </Text>
                                {
                                    (car.category=='B' && <FontAwesome5 name="car-side" size={20} color="black" />)
                                    ||
                                    (car.category=='C' && <MaterialCommunityIcons name="bus-side" size={22} color="black" />)
                                    ||
                                    (car.category=='D' && <MaterialCommunityIcons name="bus-double-decker" size={22} color="black" />)
                                }
                            </View>
                            <Text style={style.textCar}>
                                {`${language.filter.items.userName}: ${car.user.name}`}
                            </Text>
                            <Text style={style.textCar}>
                                {`${language.car.phoneText}: ${car.user.phone}`}
                            </Text>
                        </View>
                    </View>
                    <View style={style.buttonView}>
                        <Button
                            color={'white'}
                            title={language.car.phoneButton}
                            onPress={() => Linking.openURL(phoneNumber)}
                        />
                    </View>
                    <View style={style.buttonView}>
                        <Button
                            color={'white'}
                            title={language.car.textButton}
                            onPress={() => Linking.openURL(`whatsapp://send?text=${language.car.textOnWhatsUP}&phone=${car.user.phone}`)}
                        />
                    </View>
                </View>
            </View>
        </MainLayout>
    )
};
export default Index;
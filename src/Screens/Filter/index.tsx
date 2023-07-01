import React, {FC, useState} from 'react';
import {RootStackParams} from "../../Routes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button, Pressable, ScrollView, Text, View} from "react-native";
import {useCarContext} from "../../Contexts/CarContext/hook";
import Title from "../../Components/Title";
import {useLanguageContext} from "../../Contexts/LanguageContext/hook";
import {style} from "./style";
import CarItem from "./Components/CarItem";
import RNPickerSelect from "react-native-picker-select";
import {ICategoryCar} from "../../config/types";
import useChangeFilter from "./hooks/useChangeFilter";

type PropsType = NativeStackScreenProps<RootStackParams, 'Params'>
const Index: FC<PropsType> = ({navigation, route}) => {
    const {cars, setFilter, allCars} = useCarContext()
    const {language} = useLanguageContext()
    const [kind, setKind] = useState<ICategoryCar>(language.filter.checkList[0].value);
    const [onClick] = useChangeFilter(kind) // function for change cars

    return (
        <>
            <View style={style.main}>
                <Title>
                    {language.nav[1]}
                </Title>
                <View style={{paddingTop: 30}}>
                    <Text style={{fontSize: 18}}>{language.filter.title}</Text>
                    <View style={{padding: 10, backgroundColor: 'silver',}}>
                        <RNPickerSelect
                            value={kind}
                            onValueChange={setKind}
                            items={language.filter.checkList}
                        />
                    </View>
                    <View style={{backgroundColor: 'black', borderRadius: 10, margin: 10}}>
                        <Button onPress={onClick} title={language.filter.button} color={'white'}/>
                    </View>
                </View>

            </View>
            <ScrollView style={{paddingBottom: 50, flex: 1}}>
                {cars?.map((car, index) =>
                    <Pressable key={car.id} onPress={() => navigation.navigate('Car', car)}>
                        <CarItem {...car} index={index + 1}/>
                    </Pressable>
                )}
            </ScrollView>
        </>
    );
};
export default Index;
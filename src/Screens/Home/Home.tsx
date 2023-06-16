import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../Routes";
import Messengers from './helpers'
import MainLayout from "../Layouts/MainLayout";
import Icons from "./Components/Icons";
import Input from "../../Main/Components/Input";
import useSearch from "./hooks/useSearch";
import useSearchInput from "./hooks/useSearchInput";
import MapView from "react-native-maps";

const styles: any = StyleSheet.create({
    map:{
        width:'100%',
        height:'100%'
    }
})


type PropsType = NativeStackScreenProps<RootStackParams, 'Home'>
const Home: FC<PropsType> = ({navigation, route}) => {

    return (
        <MainLayout>
            <MapView style={styles.map}>

            </MapView>
        </MainLayout>
    );
};

export default Home;



const container = {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
const input = {
    height: '100%',
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: 250,
}

// const [value, setValue] = useState<number>(0)
// alert(typeof navigation)
// return (
//     <ScrollView style={{marginHorizontal:10}}>
//         <View style={styles.container}>
//             <Pressable style={{borderColor: 'red', borderWidth: 10}}>
//                 <Image
//                     style={{width: 100, height: 100}}
//                     source={{uri: 'https://ug.ru/wp-content/uploads/2022/06/dengi.jpeg'}}
//                 />
//             </Pressable>
//             <ActivityIndicator size="small" color="#0000ff"/>
//             <Text style={{color: 'red'}} >{value}</Text>
//             <StatusBar style="auto"/>
//             <KeyboardAvoidingView
//                 style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
//                 behavior="padding"
//             >
//                 <TextInput
//                     onSubmitEditing={() => alert('Когда ввод закончен')}
//                     style={{borderColor: 'blue', borderWidth: 1, ...input}}
//                 />
//             </KeyboardAvoidingView>
//             <View style={{borderWidth: 2, borderColor: 'green', position: 'absolute', bottom: 0}}>
//                 <Button color={'black'} onPress={() => setValue(value + 1)} title={'Нажми на меня'}/>
//             </View>
//         </View>
//     </ScrollView>

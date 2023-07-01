import React, {FC} from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../Routes";
import MapView from "react-native-maps";
import {AntDesign} from "@expo/vector-icons";
import useMaps from "./hooks/useMaps";
import useCreateMarks from "./hooks/useCreateMarks";
import {styles} from "./style";

type PropsType = NativeStackScreenProps<RootStackParams, 'Maps'>
const Home: FC<PropsType> = ({navigation, route}) => {
    const region = useMaps() // hook for create values for default zoom for ours coordinates
    const showLocationsOfInterest = useCreateMarks() // hook for create Markers

    return (
        <MapView style={styles.map} region={region}>
            {showLocationsOfInterest}
            <AntDesign name="filter" size={30} color={'black'} style={styles.filterView}
                       onPress={() => navigation.navigate('Params')}/>
        </MapView>
    );
};
export default Home;
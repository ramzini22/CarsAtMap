import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
        padding: 30
    },
    text: {
        color: 'white',
    },
    buttonView: {
        backgroundColor: 'black',
        borderRadius:10,
        margin:5
    },
    viewMap:{
        backgroundColor:'red',
        flex:1
    },
    map:{
        flex:1
    },
    mainCar:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10
    },
    textCar:{
        paddingRight:10,
        fontSize:18,
        color:'black',
    }

})
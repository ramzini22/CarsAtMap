import {Platform} from "react-native";
import {ICar} from "../../config/types";
import {useCallback, useMemo} from "react";

export const useLinkWats=(car:ICar)=>
    useMemo(()=>{
        let phoneNumber = car.user.phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${car.user.phone}`;
        }
        else  {
            phoneNumber = `tel:${car.user.phone}`;
        }

        return [phoneNumber]

    }, [car])
import React, {useEffect, useState} from 'react';
import Messengers from "../helpers";

const UseSearchInput = (link: string): any => {
    const clearLink:string = Messengers.DelUrl(link)
    const iconNumber:number = Messengers.FindMessenger(link)
    if (!clearLink)
        return [undefined, iconNumber]
    else {
        const params:string = new URLSearchParams({link: clearLink, linkType:iconNumber.toString()}).toString()
        return [params, iconNumber]
    }
};
export default UseSearchInput;


// let params: string = `link=${value ? Messengers.DelUrl(value) : undefined}&linkType=${iconNumber}`
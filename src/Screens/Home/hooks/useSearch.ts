import React, {useEffect, useState} from 'react';
import { GetUser } from '../api/index'
import useDebounced from "./useDebounced";

let newSearch: string | undefined =''
const UseSearch = (link:string | undefined):IUser => {
    const initUser:IUser={name:'', surname:''}
    const [user, setUser] = useState<IUser>(initUser)
    const search = useDebounced<IUser>(user, 500)
    newSearch=link

    useEffect(()=>{
        if (link){
            setUser({name:'Поиск', surname:''})
        }
        else
            setUser({name:'', surname:''})
    }, [link])

    useEffect(()=>{
        if(link && user?.name=='Поиск'){
            GetUser(link).then(({res, errors})=>{
                if (newSearch!==link){  // если что-то сломается, то вохможно тут. Ответ пришёл, а строка могла измениться
                    return
                }
                console.log(newSearch, link)
                res?
                    res?.then(res=>setUser(res?.data))
                    : setUser({name:'Не найдено', surname:''})
            })

        }
    }, [search])

    return user
};

export default UseSearch;
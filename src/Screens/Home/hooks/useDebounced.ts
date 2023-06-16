import React, {useEffect, useState} from 'react';

const UseDebounced = <T>(value:T, delay:number=1000) => {
    const[debounced, setDebounced]=useState(value);
    useEffect(()=>{
        const handler= setTimeout(()=>setDebounced(value), delay)
        return ()=>clearTimeout(handler);
    }, [value, delay])
    return debounced;
};
export default UseDebounced;
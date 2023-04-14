import React, { useEffect, useState } from 'react'
import '../App.css'

export default function Functions() {

    const [count, setCount] = useState(0);
    const [subcount, setSubcount] = useState(0);


    useEffect(() => {
        if (count === 0) {
            setSubcount(0)
        }else if(count % 5 === 0){
            setSubcount(subcount + 7);
            document.getElementById('mess').innerText = `Message : Count could be devided by ${count}. So, Subcount should increase by ${subcount}.`
        }

    }, [count])

    const heandlerInc = () => {
        setCount(count + 1);
    }

    const heandlerDec = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Count : {count}</h1>
            <h2>Sub Count : {subcount}</h2>
            <p id='mess'></p>
            <button onClick={heandlerInc}>Increment [ + ]</button> &nbsp;&nbsp;&nbsp;
            <button onClick={heandlerDec}>Decrement [ - ]</button>
        </>
    )
}

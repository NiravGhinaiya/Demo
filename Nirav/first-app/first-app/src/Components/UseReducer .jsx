import React, { useReducer } from 'react'

let initialValue = 0;

const reducer = (state, action) => {
    if (action.type === 'Increment') {
        return state + 1;
    }
    if (action.type === 'Decrement') {
        return state - 1;
    }
}


const UseReducer  = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
        <h1 style={{padding:'20px 80px'}}>{state}</h1>
        <br />
        <button onClick={ () => dispatch({type : 'Increment'}) }>Increment</button>&nbsp;&nbsp;
        <button onClick={ () => dispatch({type : 'Decrement'}) }>Decrement</button>
    </>
  )
}

export default UseReducer;
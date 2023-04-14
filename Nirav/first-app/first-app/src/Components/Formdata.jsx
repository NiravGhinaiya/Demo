import React, { useState } from 'react'
import { ReactDOM } from 'react';

export default function Formdata() {

  const [input, setInput] = useState({});
  // console.log(input)

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setInput(values => ({...values, [name]: value}))
  }


  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`My Name is ${input.UserName}.I am ${input.age} year old`);
    console.log(input)
    console.log('Hello',input.UserName )
  }

  return (
   <>
    <form onSubmit={handlesubmit}>
      <label>Enter Your Name:
          <input  
            type='text'
            name='UserName'
            value={input.UserName || ''}
            onChange={handlechange}
          />
      </label>
      <br />
      <label>Enter Your Age:
        <input 
          type='number'
          name='age'
          value={input.age || ''}
          onChange={handlechange}
        />
      </label>
      <br />
      <input type='submit' />
    </form>
   </>
  )
}

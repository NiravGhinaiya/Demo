import React, { useState } from 'react'

const Hookes = () => {

  const [text, setText] = useState([])

  const heandlerChang = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    
    setText(values => ({
      ...values,
      [name]: value
    }))
  }

  const heandlerClick = () => {
    alert(`my name is ${text.fname} ${text.lname}. I am ${text.age} Year old.`)
    
    localStorage.setItem(`${text.id}`,JSON.stringify(text));

    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
      let x = localStorage.key(i);
      arr.push(x)
    }
    console.log(arr);

  }

  return (
    <>
      <h1>Hello</h1>
      <input type='number' name='id' value={text.id} onChange={heandlerChang} placeholder='Enter Your Id Number' /> <br />
      <input type='text' name='fname' value={text.fname} onChange={heandlerChang} placeholder='Enter Your First Name' /> <br />
      <input type='text' name='lname' value={text.lname} onChange={heandlerChang} placeholder='Enter Your Last Name' /><br />
      <input type='number' name='age' value={text.age} onChange={heandlerChang} placeholder='Enter Your Age' /><br />
      <button onClick={heandlerClick}>Click Me</button>
    </>
  )
}

export default Hookes
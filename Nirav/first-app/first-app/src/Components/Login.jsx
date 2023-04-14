import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [newdata, setNewdata] = useState([]);


  // const heandlerSubmit = (e) => {
  //   e.preventDefault();

  //   if (email && password) {
  //     let id = new Date().getTime().toString()
  //     const data = { id, email, password }

  //     setNewdata([...newdata, data]);

  //     // console.log(newdata)

  //     localStorage.setItem(`${id}`, JSON.stringify(data))
  //     setEmail('');
  //     setPassword('');
  //   } else {
  //     alert('Plz Fill The Data')
  //   }
  // }


  const heandlerSubmit = (e) => {
    e.preventDefault();

    // console.log(JSON.parse(localStorage.getItem(1669207996578)))
    var arr = []
    for (let i = 0; i < localStorage.length; i++) {
      let x = localStorage.key(i);
      let y = JSON.parse(localStorage.getItem(x));
      arr.push(y)
    }
    console.log(arr);

    let txt = [];
    for (let i = 0; i < arr.length; i++) {
      // console.log({em : arr[i].email, pw : arr[i].password})
      txt.push({ em: arr[i].email, pw: arr[i].password });
    }
    // console.log(txt)

  }



  var arr = []
  const heandlerDataShow = () => {

    for (let i = 0; i < localStorage.length; i++) {
      let x = localStorage.key(i);
      let y = JSON.parse(localStorage.getItem(x));
      arr.push(y)
    }
    // console.log(arr)

    let txt = '';
    arr.map((val) => {
      // console.log(val.id,'val.id')

      txt += `
        <tr >
          <td>${val.id}</td>
          <td>${val.email}</td>
          <td>${val.password}</td>
        </tr>
      `
    })
    document.getElementById('box').innerHTML = txt;

  }

  return (
    <>
      <h1><u><b>Login</b></u></h1>
      <form onSubmit={heandlerSubmit}>
        <div>
          <label htmlFor='lemail'>Email</label>
          <input type='text' name='lemail' id='lemail' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor='lpassword'>Password</label>
          <input type='password' name='lpassword' id='lpassword' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit'>Login</button>

      </form>
      <br /><br />

      <button onClick={heandlerDataShow}>Show Data</button>

      <br /><br />

      <h2><u>Login Data </u></h2>
      <table border='2'>
        <thead >
          <tr>
            <th style={{ padding: '4px 20px' }}>Id</th>
            <th style={{ padding: '4px 20px' }}>Email</th>
            <th style={{ padding: '4px 20px' }}>Password</th>
          </tr>
        </thead>
        <tbody id='box'>

        </tbody>
      </table>

    </>
  )
}

export default Login
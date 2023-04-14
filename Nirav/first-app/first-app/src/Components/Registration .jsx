import React, { useState } from 'react'

const Registration = () => {

    const options = ['One', 'Two', 'Three', 'Four', 'Five'];
    

    const [userdata, setUserdata] = useState({
        username: '',
        email: '',
        mnumber: '',
        password: ''
    })

    const [record, setRecord] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({ ...userdata, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, mnumber, password } = userdata;

        if (username === '' || email === '' || mnumber === '' || password === '') {
            alert('Plz Fill All Data')
        } else {
            let id = new Date().getTime().toString();

            const newrecord = { ...userdata, id }
            setRecord([...record, newrecord])
            
            
            localStorage.setItem(`${id}`, JSON.stringify(newrecord));

            setUserdata({
                username: '',
                email: '',
                mnumber: '',
                password: ''
            })
        }

        console.log(userdata,'userdata');
    }

    return (
        <>
            <h1><b><u>Registration</u></b></h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>FullName</label>
                    <input type='text' autoComplete='off' name='username' id='username' value={userdata.username} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' autoComplete='off' name='email' id='email' value={userdata.email} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='mnumber'>Mobile No.</label>
                    <input type='number' autoComplete='off' name='mnumber' id='mnumber' value={userdata.mnumber} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' autoComplete='off' name='password' id='password' value={userdata.password} onChange={handleInput} />
                </div>
                <button type='submit'>Registration</button>

                <br /><br /><br />

                <select onChange={(e) => { console.log('Select Value : ', e.target.value) }} >
                    <option disabled>Please Choose One Option</option>
                    {
                        options.map((val, index) => {
                            return <option key={index}>
                                {val}
                            </option>
                        })
                    }
                </select>
            </form>
        </>
    )
}

export default Registration;
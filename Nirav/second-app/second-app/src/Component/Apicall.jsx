import React, { useEffect, useState } from 'react'

const Apicall = () => {

    const [text, setText] = useState([]);

    const Userdata = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setText(await response.json());
        } catch (error) {
            console.log('Error :',error)
        }

    }
    // console.log(text)


    useEffect(() => {
        Userdata();
    }, [])


    return (
        <>
            <h1>Hello, User</h1>
            <hr />
            {
                text.map((val) => {
                    return (
                        <div key={val.id}>
                            <h2>Name : {val.name}</h2>
                            <p>UserName : {val.username}</p>
                            <p>Email : {val.email}</p>
                            <p>Addres : {val.address.suite}, {val.address.street} {val.address.city}</p>
                            <p>zipcode: {val.address.zipcode}</p>
                            
                            <hr />
                        </div>
                    )
                })
            }


        </>
    )
}

export default Apicall
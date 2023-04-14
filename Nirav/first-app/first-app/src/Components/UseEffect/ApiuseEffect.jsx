import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import './style.css'

const ApiuseEffect = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const userData = async () => {
        try {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            const response = await fetch('https://api.github.com/users');
            setUsers(await response.json());
        } catch (e) {
            console.log('Error :',e)
        }
        // const rdata = await response.json();
        // console.log(rdata,'response.json()')
    }
    // console.log(users, 'users');

    useEffect(() => {
        userData();
    }, []);

    if(loading){
        return <Loading />
    }

    return (
        <>
            <h1>Hello, Github Users</h1>
            <div className='container-fluid line'></div>
            <div className='main'>
                <div className='Container-fluid'>
                    <div className='row'>
                        {
                            users.map((cruData) => {
                                const {id, avatar_url, login} = cruData; 
                                return (
                                    <div className='col-10 col-md-4 mt-5' key={id}>
                                        <div className='card p-2'>
                                            <div className='d-flex align-items-center'>
                                                <div>
                                                    <img src={avatar_url} alt='qwertyu' width='100px' height='100px' />
                                                </div>
                                                <div className='ml-3 w-100'>
                                                    <h4>{login}</h4>
                                                    <div>
                                                        <div><span>Articles :</span><span></span>80</div>
                                                        <div><span>Followers :</span><span>980</span></div>
                                                        <div><span>Rating :</span><span>8.9</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiuseEffect;
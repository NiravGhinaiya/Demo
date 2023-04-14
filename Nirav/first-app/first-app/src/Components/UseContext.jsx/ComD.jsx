import React from 'react';
import { FirstName } from './ComA';

const ComD = () => {

    console.log('Hello,....................')

    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return `Hello, ${fname}`
                }}
            </FirstName.Consumer>
            <h1>ComD</h1>
        </>
    )
}

export default ComD;
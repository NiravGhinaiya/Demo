import React, { createContext } from 'react'
import ComB from './ComB'

const FirstName = createContext();

const ComA = () => {
    const txt = 'Hello, Nirav';

    return (
        <>
            <h1>{txt} ...ComA</h1>
            <FirstName.Provider value={'nirav'}>
                <ComponentsA />
                <ComB />
            </FirstName.Provider>
        </>
    )
}

const ComponentsA = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return <h1>Hello, ...{fname}</h1>
                }}
            </FirstName.Consumer>
        </>
    )
}

export { ComA };
export { FirstName };
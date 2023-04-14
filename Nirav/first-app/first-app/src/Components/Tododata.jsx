import React from 'react'

export default function Tododata(props) {
    return (
        <>
            <li>{props.txt}
                <button onClick={() => {
                    props.update(props.id)
                }}>Update</button>

                <button onClick={() => {
                    props.onSelect(props.id);
                }}>Delete</button>
            </li>
        </>
    )
}

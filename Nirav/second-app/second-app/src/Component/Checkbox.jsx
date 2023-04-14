import React, { useState } from 'react'

const Checkbox = () => {

    const [isChecked, setIsChecked] = useState(false);

    const onchange = () => {
        setIsChecked(!isChecked)
    }


    return (
        <>
            <h1>Hello, Nirav</h1>
            <input type='checkbox' onChange={onchange}  value='Cricket' /> Cricket
            <input type='checkbox' onChange={onchange}  value='basketball' /> basketball
            <input type='checkbox' onChange={onchange}  value='Hokey' /> Hokey
            <input type='checkbox' onChange={onchange}  value='Baseball' />  Baseball

            <hr />

            <div>
                Above checkbox is {isChecked ? "checked" : "un-checked"}.
            </div>
        </>
    )
}

export default Checkbox
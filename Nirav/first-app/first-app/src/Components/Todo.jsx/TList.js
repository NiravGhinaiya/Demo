import React, { useEffect, useState } from 'react'
import './test.css'

const getLocalStorage = () => {
    let list = localStorage.getItem('Item');

    if (list) {
        return JSON.parse(localStorage.getItem('Item'));
    } else {
        return [];
    }
}


const TList = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalStorage())

    useEffect(() => {
        localStorage.setItem('Item', JSON.stringify(items))
    }, [items])

    const heandleClick = () => {

        if (!inputData) {
            alert('Plz Fil Input Fild')
        } else {
            setItems([...items, inputData])
            setInputData('')
        }

    }

    const itemDelete = (id) => {
        setItems((arr) => {
            return arr.filter((arrEle, index) => {
                return id !== index;
            })
        })
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <h1>Todo List</h1>
            <div>
                <input type='text' placeholder='Add Item...'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={heandleClick}>Add</button>
            </div>
            <div className='DataList'>
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index} id={index}> {item}
                                    <button onClick={() => itemDelete(index)}>Delete Item</button>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <div>
                <button onClick={removeAll}>Remove List</button>
            </div>
        </>
    )
}

export default TList
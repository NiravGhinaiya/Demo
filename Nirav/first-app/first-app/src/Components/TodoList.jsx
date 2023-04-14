import React, { useRef, useState } from 'react'
import Tododata from './Tododata';
import './Sstyle.css'

export default function TodoList(props) {

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const inputElement = useRef();

    
    const handlerOnclick = (event) => {
        setText(event.target.value);
    }
    
    const handlerClick = () => {
        if (text === '') {
            alert('Fill Data')
        } else {
            setText('');
            setItems((arr) => {
                return [...arr, text]
            })
        }
    }

    const deleteItem = (id) => {
        // console.log('delete');
        setItems((arr) => {
            return arr.filter((arrEle, index) => {
                return id !== index;
            })
        })

    }

    const updateItem = (id) => {
        console.log('UPDATE', id);
        inputElement.current.focus()
        setText(items[id]);
        // setItems((arr) => {
        //     return [...arr, items[id] = text]
        // })
    }


    return (
        <>
            <h2>Todo List</h2>
            <br />
            <br />

            <input type='text' value={text} onChange={handlerOnclick} ref={inputElement} placeholder='Enter your name ' />
            {/* <button type='submit' value='Click it?' onClick={handlerClick}>Click it?</button> */}
            <input type='submit' value='Click it?' onClick={handlerClick} />

            <br />
            <br />

            <ul>
                {/* <li>{items}</li> */}

                {
                    items.map((val, index) => {
                        return (
                            <Tododata
                                key={index}
                                id={index}
                                txt={val}
                                onSelect={deleteItem}
                                update={updateItem}
                            />
                        )
                    })
                }

            </ul>
        </>
    )
}

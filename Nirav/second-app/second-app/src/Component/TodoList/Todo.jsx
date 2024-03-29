import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const getLocalStorage = () => {
    let list = localStorage.getItem('Item');

    if (list) {
        return JSON.parse(localStorage.getItem('Item'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalStorage())
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [editItem, setEditItem] = useState(null);

    const inputRef = useRef();
    const searchVal = useRef();


    useEffect(() => {
        localStorage.setItem('Item', JSON.stringify(items))
    }, [items])

    useEffect(() => {
        let check = items.map((curEle) => {
            return { ...curEle, isSelect: false }
        })
        setItems(check);
    }, [])


    const heandleClick = () => {
        if (!inputData) {
            alert('Plz Fil Input Fild')
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((val) => {
                    if (val.id === editItem) {
                        return { ...val, name: inputData }
                    }
                    return val;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setEditItem(null);
        } else {
            const idata = { id: new Date().getTime().toString(), name: inputData, isSelect: false }
            setItems([...items, idata])
            setInputData('')
        }
    }

    //---->  Delete Item
    const itemDelete = (index) => {
        console.log(index, 'index')
        setItems((arr) => {
            return arr.filter((arrEle) => {
                return index !== arrEle.id;
            })
        })
    }

    //---->  Edit Item
    const itemEdit = (id) => {
        let newItemEdit = items.find((ele) => {
            return ele.id === id;
        });
        setToggleSubmit(false);
        setInputData(newItemEdit.name);
        setEditItem(id);
        inputRef.current.focus();
    }

    //---->  Remove all Items
    const removeAll = () => {
        setItems([])
    }

    //-----> Input Check
    const inputCheck = (id) => {
        // console.log(e,'checked')
        let isChecked = items.map((curEle) => {
            return curEle.id === id ? curEle.isSelect === true ? { ...curEle, isSelect: false } : { ...curEle, isSelect: true } : curEle
        })
        setItems(isChecked);
    }

    //----> Check Remove
    const checkRemove = () => {
        setItems((arr) => {
            return arr.filter((arrEle) => {
                return true !== arrEle.isSelect;
            })
        })
    }

    //-----> Select All Check
    const selectAllcheck = (ck) => {
        // console.log(ck,'ck')
        let selectAll = items.map((curEle) => {
            return ck === true ? { ...curEle, isSelect: true } : { ...curEle, isSelect: false }
        })
        setItems(selectAll);
    }

    // ----> Search Data
    const searchData = (e) => {
        let data = e.target.value;
        items.forEach((curEle) => {
            let fData = curEle.name;
            if (fData.match(data)) {
                console.log(curEle, 'data')
            }
        })
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className='main-body'>
                <div className='first-sec'>
                    <input type='text' placeholder='Add Item...' ref={inputRef} value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    {
                        <button onClick={heandleClick}> {toggleSubmit ? 'Add' : 'Update'} </button>
                        /* toggleSubmit ? <button onClick={heandleClick}>Add</button> : <button onClick={heandleClick}>Update</button> */
                    }
                </div>
                <div className='midel-sec'>
                    <div className='midel-f-sec'>
                        <input type='checkbox' onChange={(e) => { selectAllcheck(e.target.checked); console.log(e.target.checked, 'e.target.checked') }} /> Select All
                        <input type='text' id='myInput' onChange={searchData} placeholder='Search ...' ref={searchVal} />
                    </div>
                    <div>
                        <ul id='myUl'>
                            {
                                items.map((item, index) => {
                                    return (
                                        <li key={index} >
                                            <p>
                                                <input type='checkbox' checked={item.isSelect} onChange={() => inputCheck(item.id)} value={item.name} id={item.id} />
                                                {item.name}
                                            </p>
                                            <button onClick={() => itemEdit(item.id)}>Edit</button>
                                            <button onClick={() => itemDelete(item.id)}>Delete</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='last-sec'>
                    <button onClick={removeAll}>Remove List</button>
                    <button onClick={checkRemove}>Check Data Remove</button>
                </div>
            </div>
        </>
    )
}

export default Todo
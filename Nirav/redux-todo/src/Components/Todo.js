import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo, editTodo, onChange, addEditValue, SearchChange } from '../actions/index'

const Todo = () => {

    const state = useSelector((state) => state.Todoreduser);
    const dispatch = useDispatch()

    const addTodoFn = (e) => {
        e.preventDefault();
        state.toggle ? dispatch(addEditValue(state.id)) : dispatch(addTodo())
    }

    return (
        <>
            <div className='main-div' style={{border:'1px solid black', width:'33%', padding:'20px 30px', marginLeft:'33%',marginTop:'5%'}}>
                <div className='child-div' style={{ marginBottom: '30px' }}>
                    <div style={{display:'flex', justifyContent:'space-between',  marginBottom:'15px'}}>
                        <h1>Todo List</h1>
                        <input type='text' placeholder='Items Search...' onChange={(e) => dispatch(SearchChange(e.target.value))} style={{   padding: '5px 10px' }} />
                    </div>
                     <form className='addItem' onSubmit={(e) => addTodoFn(e)} >
                        <input type='text' placeholder='Add Items...' value={state.inpData} onChange={(e) => dispatch(onChange(e.target.value))} style={{ width: '78%', padding: '5px 10px' }} />
                        <button type='submit' style={{ width: '20%', padding: '5px 10px', marginLeft: '2%' }}>{state.toggle ? 'Update' : 'Add'}</button>
                    </form>
                </div>

                <div>
                    {
                        state.list.filter((val) => val.data.toLowerCase().includes(state.searchData.toLowerCase() || state.searchData.toUpperCase())).map((ele) => {
                            return (
                                <div className='disItem' key={ele.id} style={{ display: 'flex', border: '1px solid black', justifyContent: 'space-between', padding: '5px 10px 5px 15px', width: '100%', marginBottom: '7px' }}>
                                    <h3 style={{ margin: '0' }}>{ele.data}</h3>
                                    <div>
                                        <button onClick={() => dispatch(editTodo(ele))} style={{ padding: '5px 20px', marginRight: '5px' }}>Edit</button>
                                        <button onClick={() => dispatch(deleteTodo(ele.id))} style={{ padding: '5px 20px' }}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div style={{ marginTop: '15px' }}>
                    <button onClick={() => dispatch(removeTodo())} style={{ padding: '5px 10px' }}>Remove All</button>
                </div>
            </div>
        </>
    )
}

export default Todo
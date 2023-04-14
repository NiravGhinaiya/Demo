import React, { useState } from 'react'

const EditUserDetail = ({ modalAllVal, handleOpenModal }) => {

    const [inputFild, setInputFild] = useState('')


    const EditUserListData = (e) => {
        e.preventDefault();
        console.log(modalAllVal)
        handleOpenModal()
        setInputFild('')
    }

    return (
        <div className='model_Delete'>
            <h3>Edit a User?</h3>
            <div className='edit_modal'>
                <input type={'text'} placeholder='Enter Your Name ...' value={inputFild} onChange={(e) => setInputFild(e.target.value)} className={'edit_modal_input'} />
            </div>
            <form className='form_delete_div' onSubmit={(e) => EditUserListData(e)}>
                <button className='delete_btn' type={'submit'} >OK</button>
                <button className='delete_btn' type={'reset'} style={{ backgroundColor: '#C00C2D', color: '#FFF' }} onClick={() => {handleOpenModal(); setInputFild('')}}>NO</button>
            </form>
        </div>
    )
}

export default EditUserDetail
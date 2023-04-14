import React from 'react'

const DeleteUserDetail = ({ modalAllVal,handleOpenModal }) => {




    const deleteUserListData = (e) => {
        e.preventDefault();
        console.log('modalAllVal',modalAllVal)
        handleOpenModal()
    }


    return (
        <div className='model_Delete'>
            <h3>Delete a User?</h3>
            <div className='delete_content'>
                <p>You are about to delete a user. This will
                    remove all his/her posts and social data
                    from the database.
                </p>
            </div>
            <form className='form_delete_div' onSubmit={(e)=>deleteUserListData(e)}>
                <button className='delete_btn' type={'submit'} >OK</button>
                <button className='delete_btn' type={'reset'} style={{ backgroundColor: '#C00C2D', color: '#FFF' }} onClick={() => handleOpenModal()}>NO</button>
            </form>
        </div>
    )
}

export default DeleteUserDetail
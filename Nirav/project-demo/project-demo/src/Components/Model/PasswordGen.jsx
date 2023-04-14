import React from 'react'

const PasswordGen = ({ modalAllVal, handleOpenModal }) => {

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    var int = "0123456789"
    var string_length = 4;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum1 = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum1, rnum1 + 1);
    }
    for (var i = 0; i < string_length; i++) {
        var rnum2 = Math.floor(Math.random() * int.length);
        randomstring += int.substring(rnum2, rnum2 + 1);
    }
    var regex = /\d+/g;
    var string = randomstring;
    var matches = string.match(regex);
    let pass = randomstring.substring(0, 2) + matches[0].substring(0, 3) + randomstring.substring(2, 4) + matches[0].substring(3)


    const deleteUserListData = (e) => {
        e.preventDefault();
        console.log('modalAllVal', {...modalAllVal, Password:pass})
        handleOpenModal()
    }


    return (
        <div className='model_Delete'>
            <h3>Master Password For User</h3>
            <div className='delete_content'>
                <p>This password will be valid for next 120 seconds.<br />
                        Please do not share this password with anyone
                </p>
            </div>
            <span className='passGen'>{pass}</span>
            <form className='form_delete_div' onSubmit={(e) => deleteUserListData(e)}>
                <button className='delete_btn' type={'submit'} >OK</button>
                {/* <button className='delete_btn' type={'reset'} style={{ backgroundColor: '#C00C2D', color: '#FFF' }} onClick={() => handleOpenModal()}>NO</button> */}
            </form>
        </div>
    )
}

export default PasswordGen
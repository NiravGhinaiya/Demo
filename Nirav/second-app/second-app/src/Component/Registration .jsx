import React from 'react';
import { useForm } from 'react-hook-form';




const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSelect = (data) => { console.log(data) }

    return (
        <>
            <div className='mainRes'>
                <h1>Registration</h1>
                <form onSubmit={handleSubmit(onSelect)}>
                    <div className='formField'>
                        {/* <label>First Name :</label> */}
                        <input type='text' className='forminp' placeholder='Enter Your First Name' name='fname'  {...register('fname', { required: true })} />
                        {errors.fname && errors.fname.type === 'required' && (<p>Please Enter Your First Name</p>)}
                    </div>
                    <div className='formField'>
                        {/* <label>Last Name :</label> */}
                        <input type='text' className='forminp' placeholder='Enter Your Last Name' name='lname' {...register('lname', { required: true })} />
                        {errors.lname && errors.lname.type === 'required' && (<p>Please Enter Your Last Name</p>)}
                    </div>
                    <div className='formField'>
                        {/* <label>Email :</label> */}
                        <input type='text' className='forminp' name='email' placeholder='Enter Your Email' {...register('email', { required: true, pattern: /^\S[A-z 0-9._\S]{3,}@[A-z]{2,}[.]{1}[A-z.]{2,8}$/ })} />
                        {errors.email && errors.email.type === 'required' && (<p>Please Enter Your Email</p>)}
                        {errors.email && errors.email.type === 'pattern' && (<p>Please Enter Valid Email</p>)}
                    </div>
                    <div className='formField'>
                        <div className='formrad'>
                            <label>Gender :</label>
                            <input type='radio' value='male' name='gender' {...register('gender', { required: true })} />Male
                            <input type='radio' value='female' name='gender' {...register('gender', { required: true })} />Female
                        </div>
                        {errors.gender && errors.gender.type === 'required' && (<p>Please Enter Your Gender</p>)}
                    </div>
                    <div className='formField'>
                        {/* <label>Mobile no. :</label> */}
                        <input type='text' className='forminp' name='mobilen' placeholder='Enter Your Mobile Number' {...register('mobilen', { required: true, minLength: 10, maxLength: 10 })} />
                        {errors.mobilen && errors.mobilen.type === 'required' && (<p>Please Enter Your Mobile Number</p>)}
                        {errors.mobilen && errors.mobilen.type === 'minLength' && (<p>Please Enter Valid Mobile Number</p>)}
                        {errors.mobilen && errors.mobilen.type === 'maxLength' && (<p>Please Enter Valid Mobile Number</p>)}
                    </div>
                    <div className='formField'>
                        {/* <label>Password :</label> */}
                        <input type='password' className='forminp' name='password' placeholder='Enter Your Password' {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} />
                    </div>
                    <div className='formBtnSu'>
                        <button type='submit' variant="contained" >Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Registration 
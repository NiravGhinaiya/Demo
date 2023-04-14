import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Demo1 = () => {

    const [record, setRecord] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSelect = (data) => {

        setRecord([...record, data]);

    }
    console.log(record)

    
    return (
        <>
            <h1>Hello, Nirav</h1>

            <form onSubmit={handleSubmit(onSelect)}>
                <label>Name :</label>
                <input type='text' {...register('name', { required: true })} />
                {errors.name && errors.name.type === "required" && (<p className="errorMsg">Name is required.</p>)}<br /><br />

                <label>Email :</label>
                <input type='text' {...register('email', { required: true, pattern: /^\S[A-z 0-9._\S]{3,}@[A-z]{2,}[.]{1}[A-z.]{2,8}$/})} />
                {errors.email && errors.email.type === "required" && (<p className="errorMsg">Email is required.</p>)}
                {errors.email && errors.email.type === "pattern" && (<p className="errorMsg">Enter Valid Email.</p>)}<br /><br />

                <label>Age :</label>
                <input type='number' {...register('age', { required: true, min: 18, max: 99 })} />
                {errors.age && errors.age.type === "required" && (<p className="errorMsg">Age is required.</p>)}<br /><br />

                <label>Mobile No. :</label>
                <input type='number' {...register('mobile', { required: true, minLength: 10, maxLength: 10 })} />
                {errors.mobile && errors.mobile.type === "required" && (<p className="errorMsg">Mobile number is required.</p>)}<br /><br />


                <input type='radio' value='male' name='gender' {...register('gender', { required: true, })} />Male
                <input type='radio' value='female' name='gender' {...register('gender', { required: true, })} />Female 
                {errors.gender && errors.gender.type === "required" && (<p className="errorMsg">Gender is required.</p>)}<br /><br />


                <select {...register('Icrem', { required: true, })}>
                    <option value='chocolate'>chocolate</option>
                    <option value='strawberry'>strawberry</option>
                    <option value='vanilla'>vanilla</option>
                </select><br /><br />

                <label>Addres :</label>
                <textarea  {...register('addres', { required: true })} />
                {errors.addres && errors.addres.type === "required" && (<p className="errorMsg">Addres is required.</p>)}<br /><br />

                <input type='submit' value='Submit' />
            </form>

        </>
    )

}

export default Demo1
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";


const departments = [
    { value: "Computer-Science", label: "Computer Science" },
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Mathematics", label: "Mathematics" }
];

const initialValues = {
    gender: "male",
    skills: {
        react: true,
        nodejs: false,
        JavaScript: true,
        net: false,
        angular: false,
        Python: false,
    }
};



const Text = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            gender: initialValues.gender,
            skills: Object.keys(initialValues.skills).filter((val) => initialValues.skills[val] === true)
        }
    });

    const submitData = (data) => { console.log(data) }

    return (
        <>
            <h1>Hello, Nirav</h1>
            <form onSubmit={handleSubmit(submitData)}>

                <Form.Label>Select Department of Interest</Form.Label>
                <Controller
                    name='department'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select {...field} isMulti options={departments} />
                    )}
                />
                {errors.department && (<p> This is required Field. </p>)}

                <hr /><br /><br />

                <Form.Label>Select Gender</Form.Label>
                <br />
                <Form.Group>
                    <Form.Check
                        type='radio'
                        label='male'
                        value='male'
                        {...register('gender', { required: "Please select your gender" })}
                    />
                    <Form.Check
                        type='radio'
                        label='female'
                        value='female'
                        {...register('gender')}
                    />
                    {errors.gender && <p>{errors.gender.message}</p>}
                </Form.Group>

                <hr /><br /><br />

                <Form.Label>Select Your Skills</Form.Label>
                <br />
                <Form.Group>
                    <Form.Check
                        type='checkbox'
                        label='react'
                        value='react'
                        {...register('skills', { required: 'Please select your Skills' })}
                    />
                    <Form.Check
                        type='checkbox'
                        label='nodejs'
                        value='nodejs'
                        {...register('skills')}
                    />
                    <Form.Check
                        type='checkbox'
                        label='JavaScript'
                        value='JavaScript'
                        {...register('skills')}
                    />
                    <Form.Check
                        type='checkbox'
                        label='net'
                        value='net'
                        {...register('skills')}
                    />
                    <Form.Check
                        type='checkbox'
                        label='angular'
                        value='angular'
                        {...register('skills')}
                    /><Form.Check
                        type='checkbox'
                        label='Python'
                        value='Python'
                        {...register('skills')}
                    />
                    {errors.skills && <p>{errors.skills.message}</p>}
                </Form.Group>


                <br />
                <Button type='submit' variant="contained" endIcon={<SendIcon />}>Submit</Button>
            </form>

            <hr /><hr /><br /><br />

            <AvatarGroup total={28} max={6}>
                <Avatar alt='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU' />
                <Avatar alt='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU' />
                <Avatar alt='img3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU' />
                <Avatar alt='img4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YAgfCmeJe9c74JZ58Dry99OucVrIKBZ1OLxUHmDSLaBsoO5qO9QItkIVAj8u42J_u-4&usqp=CAU' />
                <Avatar alt='img5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH95MYy4lQdqXKOR2FCcv2KIHRhz7rCj4N8VKm4zbQmfaOU7lU_m_ykDR6sWGMMEKof8&usqp=CAU' />
            </AvatarGroup>


            <br /><br /><hr /><hr />

        </>
    )
}

export default Text
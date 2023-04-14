import React, { useState } from 'react'
import CommanTable from './CommanTable'
import { StudentList } from './StudentList'
import key from '../Style/Image/key.png'
import PopComponent from "./hoc/PopComponent";
import CustomModel from './CustomModel';

const StudentDetail = () => {

    const [modalDetails, setModalDetails] = useState({ modalValue: '', modalName: '', modalIsOpen: false });
    let ModalData = PopComponent[modalDetails?.modalName]


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'User Name',
            dataIndex: 'stdName',
            isUsericon: true,
        },
        {
            title: 'STD',
            dataIndex: 'std',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
        {
            title: 'Password',
            dataIndex: 'stdPassword',
            type: 'action',
            render: (obj) => {
                return (
                    <span onClick={() => handleOpenModal('PasswordGen', obj)} style={{ cursor: 'pointer' }}>
                        <img src={key} alt='Image not found' width='20px' height='auto' />
                    </span>
                )
            }
        }
    ]


    const handleOpenModal = (type, data) => {
        switch (type) {
            case 'PasswordGen': {
                setModalDetails({ ...modalDetails, modalValue: data, modalName: type, modalIsOpen: true });
                break;
            }
            default: {
                setModalDetails({ ...modalDetails, modalIsOpen: false })
            }
        }
    };



    return (
        <div>
            <h1>Student Detail</h1>
            <CommanTable
                columns={columns}
                userData={StudentList}
            />
            <CustomModel modalData={modalDetails?.modalName} handleOpenModal={handleOpenModal} modalIsOpen={modalDetails?.modalIsOpen}>
                <ModalData handleOpenModal={handleOpenModal} modalAllVal={modalDetails?.modalValue} />
            </CustomModel>
        </div>
    )
}

export default StudentDetail
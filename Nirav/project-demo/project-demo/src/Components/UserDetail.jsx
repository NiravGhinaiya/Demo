import React, { useState } from 'react'
import CommanTable from './CommanTable'
import { ListItem } from './ListItem'
import PopComponent from "./hoc/PopComponent";
import CustomModel from './CustomModel';



const UserDetail = () => {


    const [modalDetails, setModalDetails] = useState({ modalValue: '', modalName: '', modalIsOpen: false });
    let ModalData = PopComponent[modalDetails?.modalName]


    const columns = [
        {
            title: 'ID',
            // dataIndex: 'id',
            type: 'idrender',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            isUserSort: true,
        },
        {
            title: 'User Email',
            dataIndex: 'email',
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
            title: 'Action',
            dataIndex: 'action',
            type: 'action',
            render: (data) => {
                return <div>
                    <span style={{ width: '20px', height: 'auto', cursor: 'pointer', margin: '5px 6px' }} onClick={() => handleOpenModal('EditUserDetail', data)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </span>
                    <span style={{ width: '20px', height: 'auto', cursor: 'pointer' }} onClick={() => handleOpenModal('DeleteUserDetail', data)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </span>

                </div>
            }
        },
    ]


    const handleOpenModal = (type, data) => {
        switch (type) {
            case 'DeleteUserDetail': {
                setModalDetails({ ...modalDetails, modalValue: data, modalName: type, modalIsOpen: true });
                break;
            }
            case 'EditUserDetail': {
                setModalDetails({ ...modalDetails, modalValue: data, modalName: type, modalIsOpen: true });
                break;
            }
            default: {
                setModalDetails({ ...modalDetails, modalIsOpen: false })
            }
        }
    };

    

    return (
        <div style={{ width: '100vh' }}>
            <h1>User Detail</h1>
            <CommanTable
                columns={columns}
                userData={ListItem}
                handleOpenModal={handleOpenModal}
            />
            <CustomModel handleOpenModal={handleOpenModal} modalIsOpen={modalDetails?.modalIsOpen}>
                <ModalData handleOpenModal={handleOpenModal} modalAllVal={modalDetails?.modalValue} />
            </CustomModel>
        </div>
    )
}

export default UserDetail
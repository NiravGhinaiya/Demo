import React from 'react'
import CommanTable from './CommanTable'
import { EmployeList } from './EmployeList'


const EmployeDetail = () => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Employe Name',
            dataIndex: 'empName',
            isUsericon: true,
        },
        {
            title: 'Work Time',
            dataIndex: 'workTime',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
        },
        {
            title: 'Employe Status',
            dataIndex: 'experience',
            type:'action',
            render: (obj) => {
                return (
                    obj.status === 'avaible'
                        ? <svg color='#008000b5' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /></svg>
                        : <svg color='rgb(255 95 95)' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /></svg>
                )
            }
        },

    ]

    return (
        <div>
            <h1>Employe Detail</h1>
            <CommanTable
                columns={columns}
                userData={EmployeList}
            />
        </div>
    )
}

export default EmployeDetail
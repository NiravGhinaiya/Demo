import { Modal } from 'antd'
import React from 'react'

const CustomModel = ({ children, modalIsOpen, handleOpenModal, className, modalName, modalAllVal, modalData }) => {
    return (
        <Modal closable={modalData === 'PasswordGen' ? false : true} footer={null} maskClosable={false} open={modalIsOpen} onCancel={() => handleOpenModal()}>
            {children}
        </Modal>
    )
}

export default CustomModel
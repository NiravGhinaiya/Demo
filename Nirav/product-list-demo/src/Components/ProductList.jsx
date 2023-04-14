import { Col, Row, Button, Input, Drawer, Modal, Table, Space, Checkbox } from 'antd'
import { CloseOutlined, PrinterOutlined, SettingOutlined, PlusOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import Formres from './Formres';
import { useEffect } from 'react';

const { confirm } = Modal;



const ProductList = () => {

    const [toggleForm, setToggleForm] = useState(false);
    const [toggleSetting, setToggleSetting] = useState(false);
    const [recordList, setRecordList] = useState(JSON.parse(localStorage.getItem('List')) ? JSON.parse(localStorage.getItem('List')) : [])
    const [stats, setStats] = useState(false)
    const [checkedBox, setCheckedBox] = useState(['id', 'productName', 'Description', 'upload', 'Price', 'Discount', 'stats', 'Action'])
    const [editToggle, setEditToggle] = useState(false)
    const [editData, setEditData] = useState({})
    const [val, setVal] = useState('')
    const [checkData, setCheckData] = useState([])

    const [imageUrl, setImageUrl] = useState();


    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 7,
        },
    });


    useEffect(() => {
        setRecordList(JSON.parse(localStorage.getItem('List')))
    }, [stats])

    const toggleFormClick = () => {
        setToggleForm(true)
    }

    const editRecod = (val) => {
        setToggleForm(true);
        setEditToggle(true)
        // setEditData(val)
        // console.log(val, 'val
        setEditData(val);
        setImageUrl(val.upload)

    }

    // Delete record
    const deleteRecord = (id) => {
        confirm({
            title: 'Are you sure delete this Project ?',
            icon: <span style={{ backgroundColor: 'rgb(243 221 221)', padding: '21px 21px 16px', borderRadius: '50px', margin: '10px 0 20px  40%', color: 'red' }}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
            </span>,
            okText: 'Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                const fielRecord = recordList.filter((ele) => {
                    return ele.id !== id;
                })
                setRecordList(fielRecord)
                localStorage.setItem('List', JSON.stringify(fielRecord))
            },
            onCancel() {
                // console.log('Cancel');
            },
        });

    }


    const settingToggle = () => {
        setToggleSetting(true)
    }

    const onChange = (checkedValues) => {
        setCheckData(checkedValues)
    };



    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'id',
            width: 100,
            align: 'center',
            render: (obj, arr, index) => {
                return index + 1
            }
        },
        {
            key: '2',
            title: 'Product Name',
            dataIndex: 'productName',
            align: 'center'
        },
        {
            key: '3',
            title: 'Description',
            align: 'center',
            width: '300px',
            dataIndex: 'Description',
        },
        {
            key: '4',
            title: 'Product Image',
            align: 'center',
            dataIndex: 'upload',
            render: (obj) => (
                <img src={obj} alt='Img' style={{
                    width: '40px', height: '40px', borderRadius: '50%'
                }} />
            )
        },
        {
            key: '5',
            align: 'center',
            title: 'Price',
            dataIndex: 'Price',
            render: (obj) => '₹ ' + obj
        },
        {
            key: '6',
            title: 'Disscount',
            align: 'center',
            dataIndex: 'Discount',
            render: (obj) => obj + '%'
        },
        {
            key: '7',
            align: 'center',
            title: 'Availalble',
            dataIndex: "stats",
            render: (obj) => {
                // return console.log('obj',obj)
                return (
                    obj === 'avaible'
                        ? <svg color='#008000b5' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /></svg>
                        : <svg color='rgb(255 95 95)' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /></svg>
                )
            }
        },
        {
            key: '8',
            title: 'Action',
            // dataIndex: "Action",
            align: 'center',
            render: (obj) => {
                // console.log('obj.id',obj)
                return (
                    <Space size={8}>
                        <Button type='ghost' icon={<EditTwoTone />} onClick={() => editRecod(obj)} />
                        <Button type='ghost' icon={<DeleteTwoTone />} onClick={() => deleteRecord(obj.id)} />
                    </Space>
                );
            },
        }
    ]

    const checkBoxSelect = () => {
        // console.log('checkedBox', checkedBox)
        setCheckedBox(checkData)
        setToggleSetting(false)
    }

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({ pagination, filters, ...sorter, });
    };

    return (
        <>

            <Drawer placement="right" title="Setting" closable={false} onClose={() => setToggleSetting(false)} open={toggleSetting}
                extra={
                    <Button icon={<CloseOutlined />} style={{ borderRadius: '50px' }} onClick={() => setToggleSetting(false)} />
                }
            >
                <div >
                    <Checkbox.Group defaultValue={checkedBox} onChange={onChange} >
                        <Row>
                            <Col span={16}>
                                <Checkbox value='id' style={{ marginBottom: '5px' }}>ID</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='productName' style={{ marginBottom: '5px' }}>PRODUCT NAME</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='Description' style={{ marginBottom: '5px' }}>DESCRIPTION</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='upload' style={{ marginBottom: '5px' }}>PRODUCT IMAGE</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='Price' style={{ marginBottom: '5px' }}>PRICE</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='Discount' style={{ marginBottom: '5px' }}>DISCOUNT</Checkbox>
                            </Col>
                            <Col span={16}>
                                <Checkbox value='stats' style={{ marginBottom: '5px' }}>AVAILABLE</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </div>
                <div style={{ marginTop: '100px' }}>
                    <Space size={30} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type='default' style={{ width: '100px' }} onClick={() => setToggleSetting(false)} >Cancel</Button>
                        <Button type='primary' style={{ width: '100px' }} onClick={checkBoxSelect}>Save</Button>
                    </Space>
                </div>
            </Drawer>



            <div style={{
                padding: '30px 60px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    backgroundColor: '#fff',
                    padding: '15px 20px'
                }}>
                    <div>
                        <h2>{recordList?.length} Product</h2>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <Input
                            placeholder='Search'
                            prefix={<SearchOutlined />}
                            onChange={e => {
                                setVal(e.target.value);
                            }}

                            style={{ width: '100%', marginRight: '20px' }}

                        />
                        <Button type='default' icon={<PrinterOutlined />} style={{ marginLeft: '10px', padding: '0px 8px' }} onClick={() => window.print()} />
                        <Button type='default' icon={<SettingOutlined />} onClick={settingToggle} style={{ marginLeft: '10px', padding: '0px 8px' }} />
                        <Button type='primary' icon={<PlusOutlined />} onClick={toggleFormClick} style={{ marginLeft: '10px', padding: '0px 8px' }} />
                        <Drawer placement="right" onClose={() => setToggleForm(false)} open={toggleForm}>
                            <Formres editData={editData} setStats={setStats}
                                setImageUrl={setImageUrl} imageUrl={imageUrl}
                                setToggleForm={setToggleForm} editToggle={editToggle} />
                        </Drawer>

                    </div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '15px 10px' }}>
                    <Table
                        rowKey={obj => obj.id}
                        columns={
                            columns?.filter((ele) => {
                                return checkedBox.includes(ele.dataIndex) || ele.title === 'Action' ? true : null
                            })
                        }
                        // columns={columns}
                        dataSource={
                            recordList?.filter(entry =>
                                entry.productName.toLowerCase().includes(val.toLowerCase() || val.toUpperCase())
                            )
                        }
                        scroll={{ x: '100%', }}
                        pagination={tableParams.pagination}
                        onChange={handleTableChange}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductList


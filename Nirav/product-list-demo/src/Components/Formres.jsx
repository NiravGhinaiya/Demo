import { Button, Form, Input, Select, Space, Upload, message } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select




const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};


const Formres = ({ editData, setStats, setToggleForm, editToggle,setImageUrl, imageUrl }) => {

    const [record, setRecord] = useState(localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : [])
    const [loading, setLoading] = useState(false);
    

    // const [fileList, setFileList] = useState([]);

    const [form] = Form.useForm();

    const [dataForm, setDataForm] = useState({
        productName: '',
        Description: "",
        Price: '',
        Discount: '',
        stats: '',
        upload: ''
    })



    useEffect(() => {
        form.resetFields();
        setDataForm(editData)
    }, [editData])


    const handleChange = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }


    const handleChangeSelect = (e) => {
        setDataForm({ ...dataForm, stats: e })
    }


    const onFinishForm = (data) => {

        if (editToggle === true) {
            const inx = record.findIndex((e) => e.id === editData.id)
            let prestate = record
            prestate[inx] = { ...dataForm, upload: imageUrl }
            setRecord(prestate)
            localStorage.setItem('List', JSON.stringify(prestate))
        } else {
            let id = new Date().getTime().toString();
            let temp = [...record, { id, ...data, upload: imageUrl }]
            setRecord(temp);
            localStorage.setItem('List', JSON.stringify(temp))
        }

        setStats(true)
        setToggleForm(false)
        form.resetFields();
        setImageUrl()
    }

    // console.log('record record', record)


    const handleChangeS = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading && <PlusOutlined />}
            <div style={{ marginTop: 8, }}>
                Upload
            </div>
        </div>
    );



    return (
        <>
            <Form onFinish={onFinishForm} form={form} style={{
                right: '8px',
                padding: '10px',
                position: 'absolute',
                width: '95%',
            }} >
                <Form.Item >
                    <div >
                        <h1 style={{ fontSize: '40px', margin: '0' }}>Form</h1>
                    </div>
                </Form.Item>

                <Form.Item name='productName'
                    rules={[{
                        required: true,
                        message: '* Enter Product Name'
                    }, {
                        pattern: /^[a-zA-Z_0-9]{2,20}$/,
                        message: '* Enter Product Name'
                    }]} >
                    <Input placeholder='Product Name' autoComplete='off' name='productName' defaultValue={editData.productName} onChange={handleChange} />
                </Form.Item>

                <Form.Item name='Description'
                    rules={[{
                        required: true,
                        message: '* Enter Description'
                    }, {
                        pattern: /^[A-z0-9!@#$%^&*(). '",\n]{5,100}$/,
                        message: "* Enter Minimum 5 and Maximum 100 letter's allow"
                    }]} >
                    <TextArea placeholder='Description' autoComplete='off' name='Description' rows={3} defaultValue={editData.Description} onChange={handleChange} />
                </Form.Item>

                <Form.Item name='Price'
                    rules={[{
                        required: true,
                        message: '* Enter Price'
                    }, {
                        pattern: /^(?=.*[0-9])[0-9]{1,6}$/,
                        message: '* Enter Valid Price'
                    }]} >
                    <Input placeholder='Price' autoComplete='off' name='Price' defaultValue={editData.Price} onChange={handleChange} />
                </Form.Item>

                <Form.Item name='Discount'
                    rules={[{
                        required: true,
                        message: '* Enter Discount'
                    }, {
                        pattern: /^(?=.*[0-9])[0-9]{1,2}$/,
                        message: '* Enter Discount Number'
                    }]} >
                    <Input placeholder='Discount' autoComplete='off' name='Discount' defaultValue={editData.Discount} onChange={handleChange} />
                </Form.Item>

                <Form.Item name='stats'
                    rules={[{
                        required: true,
                        message: '* Enter Product Stats'
                    }]}

                >
                    <Select placeholder='Select Stats' defaultValue={editData.stats} onChange={handleChangeSelect}>
                        <Option value="avaible">avaible</Option>
                        <Option value="not-avaible">not-avaible</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="upload" rules={[{
                    required: true,
                    message: 'Upload Product Image'
                }]}  >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChangeS}
                        value={editData.upload}
                    >
                        {imageUrl ? (<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />) : (uploadButton)}
                    </Upload>
                </Form.Item>

                <Form.Item style={{ marginTop: '10%', justifyContent: 'center', display: 'flex' }}>
                    <Space size={20}>
                        <Button type='default' htmlType='button' style={{ width: '130px' }} onClick={() => {
                            form.resetFields();
                            setToggleForm(false)
                        }}>Cancel</Button>
                        <Button type='primary' htmlType='submit' style={{ width: '130px' }} >Save</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default Formres;
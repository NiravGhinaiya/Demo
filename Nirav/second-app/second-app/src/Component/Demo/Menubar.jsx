import { Menu } from 'antd';
import React from 'react'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';




function getItem(label, key, icon, children, type) {
    return { label, key, icon, children, type };
}

const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('option 1', 'g1', null, [
            getItem('item1', 'c1'), getItem('item2', 'c2'), getItem('item3', 'c3')], 'group'),
        getItem('option 2', 'g2', null, [
            getItem('item4', 'c4'), getItem('item5', 'c5'), getItem('item6', 'c6')], 'group'),
        getItem('option 3', 'g3', null, [
            getItem('item7', 'c7'), getItem('item8', 'c8'), getItem('item9', 'c9')], 'group')
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('option 1', 'g8'), getItem('option 2', 'g10'), getItem('option 3', 'g12')
    ]),
    getItem('Navigation three', 'Sub3', <SettingOutlined />),
    getItem('Navigation ', 'Sub4', null, [
        getItem('option 1', 'g9'), getItem('option 2', 'g11'), getItem('option 3', 'g13')
    ], 'group'),
    getItem('Navigation five', 'Sub5', <MailOutlined />),
    getItem('Navigation six', 'Sub6'),

]

const Menubar = () => {

    const onClick = (e) => { console.log('Click', e) }

    return (
        <>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                mode='inline'
                items={items}
            />
        </>
    )
}

export default Menubar
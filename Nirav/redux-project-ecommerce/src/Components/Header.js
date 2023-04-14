import React from 'react'
import {  ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {

  const addCartP = useSelector((state) => state.addCartP)
  // console.log('addCartP',addCartP)

  return (
    <div style={{
      backgroundColor: 'whitesmoke', padding: '25px 40px', justifyContent: 'space-between', display: 'flex'
    }}>
      <h1>Header</h1>
      {Object.keys(addCartP.addCartP).length === 0 ?
        (
          <Link to='/cartproductd'>
            <Button type='default' style={{ fontSize: '20px', width: '40px', height: '40px' }} icon={<ShoppingCartOutlined />}  />
          </Link>
        ) :
        (
          <Link to='/cartproductd'>
            <Badge count={(addCartP.addCartP).length}>
              <Button type='default' style={{ fontSize: '20px', width: '40px', height: '40px' }} icon={<ShoppingCartOutlined />}  />
            </Badge>
          </Link>

        )}

    </div>
  )
}

export default Header
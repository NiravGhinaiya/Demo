import React from 'react'
import { Anchor, Button, Tooltip } from 'antd';
import UserDetail from './UserDetail';
import StudentDetail from './StudentDetail';
import EmployeDetail from './EmployeDetail';
import ProductData from './ProductData';
import UserChart from './Chart/UserChart';
import { useNavigate } from "react-router-dom"
import logoutIcon from '../assets/Images/logoutIcon.png'
import VideoPlayer from '../Page/VideoPlayer';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <>
      <div style={{
        backgroundColor: '#fff',
        position: 'fixed',
        width: '100%',
        left: '0',
        top: '0'
      }}>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'UserDetail',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'StudentDetail',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'EmployeDetail',
            },
            {
              key: 'part-4',
              href: '#part-4',
              title: 'UserChart',
            },
            {
              key: 'part-5',
              href: '#part-5',
              title: 'ProductData',
            },
            {
              key: 'part-6',
              href: '#part-6',
              title: 'VideoPlayer',
            },
          ]}
        />
        <div style={{ display: 'flex', position: 'absolute', right: '20px', top: '17px', zIndex: '99', cursor: 'pointer' }}>
          <div style={{ padding: ' 5px 10px', border: '1px solid red', borderRadius: '20px' }}>
            <span onClick={() => navigate('/ProductBuy')}>Buy Product</span>
          </div>
          <Tooltip placement="bottom" title='Logout'>
            <span onClick={handleClick} style={{ marginLeft:'20px', display:'flex', alignItems:'center' }}>
              <img src={logoutIcon} alt='LogoutIcon' width='20px' height='auto' />
            </span>
          </Tooltip>
        </div>
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,255,0,0.02)',
            paddingTop: '5%'
          }}
        >
          <UserDetail />
        </div>
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,0,255,0.02)',
            paddingTop: '5%'
          }}
        >
          <StudentDetail />
        </div>
        <div
          id="part-3"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#FFFBE9',
            paddingTop: '5%'
          }}
        >
          <EmployeDetail />
        </div>
        <div
          id="part-4"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#F4EAD5',
            paddingTop: '5%'
          }}
        >
          <UserChart />
        </div>
        <div
          id="part-5"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#DAE2B6',
            paddingTop: '5%'
          }}
        >
          <ProductData />
        </div>
        <div
          id="part-6"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#DAE2B6',
            paddingTop: '5%'
          }}
        >
          <VideoPlayer />
        </div>
      </div>
    </>
  )
}

export default Home
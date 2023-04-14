import React from 'react';
import './Sstyle.css'


export function Srender(props) {

  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img src={props.simg} alt='Img not found' />
          <div className='detail'>
            <h3 className='heading'>{props.sheding}</h3>
            <p className='title'>{props.stitle}</p>
          </div>
        </div>
      </div>
    </>
  )
}

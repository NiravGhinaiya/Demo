import React, { useState } from 'react'
import imgPerson from '../../assate/image/download.png'
import wMap from '../../assate/image/map.jpg'

import ImageMapper from 'react-img-mapper';
import data from './data.json'
import { Modal } from 'antd';



const ImageClick = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelDetail, setModelDetail] = useState({})



    const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
    const MAP = {
        name: 'my-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: data,
    };

    const heandleClick = (e) => {
        console.log('-------', e)
        setModelDetail(e)
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>ImageClick</h1>
            {/* <div>
                <img src={imgPerson} alt="French Food" usemap="#foodmap" width="225" height="225"></img>
                <map name="foodmap">
                    <area shape="poly" coords="32,182,34,167,42,157,50,148,62,142,81,134,89,124,91,116,87,103,82,94,78,88,80,78,79,68,79,50,85,38,97,30,113,26,127,28,139,34,148,44,147,50,148,63,150,71,149,80,151,87,148,92,144,100,137,110,138,118,140,126,147,132,157,138,169,146,179,152,188,158,192,171,193,178,195,192,193,196,34,196,92,197" alt="Croissant" target='_blank' href="https://www.youtube.com/" />
                </map>
            </div>
            <div>
                <img src={wMap} alt="Map" usemap="#wMap" width="610" height="267"></img>
                <map name="wMap">
                    <area shape="poly" coords="224,105,255,112,260,80,249,79,250,71,231,68" alt="Croissant" target='_blank' href="www.google.com maps" />
                </map>
            </div> */}
            <div className='imageMap'>
                <ImageMapper src={wMap} width='610' height='267' map={MAP} onClick={heandleClick} />
            </div>
            <Modal  open={isModalOpen} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }} >
            <h1>{modelDetail.title}</h1>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default ImageClick




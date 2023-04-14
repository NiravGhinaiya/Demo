import moment from 'moment';
import React, { useEffect, useState } from 'react'
import './style..css'
import bgClock from '../../assate/image/clock-removebg.png'
import hourClock from '../../assate/image/hour.png'
import minitClock from '../../assate/image/minit.png'
import secondClock from '../../assate/image/second-copy.png'

const Clock = () => {

    // const [second, setSecond] = useState(0)
    // const [min, setMin] = useState(0)
    // const [hours, setHours] = useState(0)

    const [time, setTime] = useState(moment().format())


    // setInterval(() => {
    // let temph = moment().format('HH');
    // let tempm = moment().format('mm');
    // let temps = moment().format('ss');
    // let tempSSS = moment().format('SSS');

    // setHours(((moment().format('h') % 12) / 12) * 360 + 90 + (moment().format('mm') * 6 + ((temps * 360) / 60 + (tempSSS * 0.006)) / 60) / 12)
    // // ((moment().format('h') % 12) / 12) * 360 + 90 + minute / 12
    // setMin(moment().format('mm') * 6 + ((temps * 360) / 60 + (tempSSS * 0.006)) / 60)
    // setSecond((temps * 360) / 60 + (tempSSS * 0.006))


    // }, 10);

    useEffect(() => {
        const interval = setInterval(() => { setTime(moment().format('SSS')) }, 1);
        return () => {
            clearInterval(interval);
        };
    }, []);

    let miliSecond = moment().format('SSS') * 0.006;
    let second = moment().format('ss') * 6 + miliSecond
    let minit = moment().format('mm') * 6 + second / 60
    let hour = ((moment().format('h') % 12) / 12) * 360  + minit / 12
    // ((moment().format('h') % 12) / 12) * 360 + 90 + minute / 12;

    // console.log(second)

    return (
        <div className='hero-circle'>
            <div className='clockFram'>
                <img src={bgClock} alt='clock' className='mainClock' />
            </div>
            <div class="hero-face">
                <div style={{ position: 'absolute', height: '106px', left: '48%', top: '22px', transform: `rotate(${second}deg)`, zIndex: '12' }}>
                    <img src={secondClock} width='8px' style={{ transform: 'rotate(180deg)' }} />
                </div>
                <div style={{ position: 'absolute', height: '68px', left: '48.5%', top: '37px', transform: `rotate(${minit}deg)` }}>
                    <img src={minitClock} width='7px' />
                </div>
                <div style={{ position: 'absolute', height: '44px', left: '48%', top: '52px', transform: `rotate(${hour}deg)` }}>
                    <img src={hourClock} width='8px' />
                </div>
                {/* <div id="hour" className="hero-hour" style={{ transform: `rotate(${hour}deg)` }} ></div>
                <div id="minute" className="hero-minute" style={{ transform: `rotate(${minit}deg)` }} ></div>
                <div id="second" className="hero-second" style={{ transform: `rotate(${second}deg)` }} ></div> */}
            </div>
        </div>
    )
}

export default Clock
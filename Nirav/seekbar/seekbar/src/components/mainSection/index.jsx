import React, { useEffect, useRef, useState } from 'react'
import bgImg from '../../assate/image/backgroundImage.jpg'
import cheesIcon from '../../assate/image/chessIcon.png'
import settingIcon from '../../assate/image/settingIcon.png'
import { FiSettings } from "react-icons/fi";
// import { Cursor } from 'custom-pointer-react'
import AnimatedCursor from "react-animated-cursor"  

const MainSection = () => {

    const [toggle, setToggle] = useState(false)

    const clickSettingOpenClose = () => {
        setToggle(!toggle)
    }

    const handleClick = (data) => {
        console.log('sdfghjk', data)
    }


    // (function () {
    //     document.onmousemove = handleMouseMove;
    //     function handleMouseMove(event) {
    //         var eventDoc, doc, body;

    //         event = event || window.event; // IE-ism

    //         // If pageX/Y aren't available and clientX/Y are,
    //         // calculate pageX/Y - logic taken from jQuery.
    //         // (This is to support old IE)
    //         if (event.pageX == null && event.clientX != null) {
    //             eventDoc = (event.target && event.target.ownerDocument) || document;
    //             doc = eventDoc.documentElement;
    //             body = eventDoc.body;

    //             event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
    //             event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    //         }

    //         mouseCurentPosition.style.top = `${event.clientX}px`;

    //         // let tempEleT = document.getElementsByClassName('djghdfkghdfkjghd')
    //         // tempEleT.style.top = `${event.clientX}px`;
    //         // let tempEleL = document.getElementsByClassName('djghdfkghdfkjghd')
    //         // tempEleL.style.left = `${event.clientY}px`;

    //         // console.log(event.pageX, event.pageY)
    //         // setMouseCur({ top: `${event.pageX}px`, left: `${event.pageY}px` })
    //         // Use event.pageX / event.pageY here
    //     }
    // })();

    // console.log()

    // setInterval(() => {
    //     let temp = document.getElementById('startNowBtndffdg');
    //     let r = Math.floor(Math.random() * 256); 
    //     let g = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);

    //     temp.style.backgroundColor = `rgb(${r},${g},${b})`;
    // }, 500);

    return (
        <>
            <div>
               
                <AnimatedCursor
                    innerSize={15}
                    outerSize={20}
                    color="231, 201, 0"
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                />
                {/* <Cursor color='#e7c900' showRing={false} cursorSize='20px' /> */}
                <div className='main-wraper-Page'>
                    <img src={bgImg} alt='bg img' className='bgImage' />
                    <section>
                        <div className='content-layout-wrap'>
                            <div className='firse-content-wrap'>
                                <div className='intro_layer'>
                                    <img src={cheesIcon} alt='chess Icon' />
                                </div>
                                <div className='intro_layer_second'>
                                    <h2> academic <br />
                                        <span>chess</span>
                                    </h2>
                                    <p>Best Chess Sets, Tables & Clocks for Sale</p>
                                </div>
                            </div>
                            <div className='second-content-wrap'>
                                <a href="#" className='startNowBtn' id='startNowBtndffdg'>start now</a>
                                <a href="#" className='learnMoreBtn'>learn more</a>
                            </div>
                        </div>
                    </section>
                </div>


                <div className={toggle ? 'main-setting-wraper' : 'main-setting-wraper main-setting-wraper-open'} id='mainSettingWraper'>
                    <button className='settingIcon' onClick={clickSettingOpenClose}>
                        <img src={settingIcon} alt='settingIcon' />
                    </button>
                    <div class="switcher">
                        <div className='first-wraper'>
                            <h4>Styles Selector</h4>
                        </div>
                        <div className='second-wraper'>
                            <p>Accent color:</p>
                            <ul>
                                <li><button class="color1" onClick={() => handleClick('color1')}></button></li>
                                <li><button class="color2" onClick={() => handleClick('color2')}></button></li>
                                <li><button class="color3" onClick={() => handleClick('color3')}></button></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='ourTeam-Detail'>
                <section class="team">
                    <h2 class="section-heading">Our Team</h2>
                    <div class="containerTeam">
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" /><span class="name">Kalyan</span>
                        </div>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" /><span class="name">Suchitra Tiwari</span>
                        </div>

                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="" /><span class="name">Sajid Ghani</span>
                        </div>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" /><span class="name">Dhriti</span>
                        </div>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" /><span class="name">Milind</span>
                        </div>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80" alt="" /><span class="name">Srikant Tiwari</span>
                        </div>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" alt="" /><span class="name">Major Sameer</span>
                        </div>
                    </div>
                </section>

            </div>

            <div className='fhgkfd'>
            </div>
        </>
    )
}

export default MainSection
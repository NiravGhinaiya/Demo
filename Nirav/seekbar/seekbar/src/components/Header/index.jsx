import React from 'react'
import logo from '../../assate/image/logo.png'
import searchIcon from '../../assate/image/searchIcon.svg'
import userIcons from '../../assate/image/userIcons.png'
import mailIcons from '../../assate/image/mailIcons.png'
import bgImage from '../../assate/image/backgroundImage.jpg'
import navigation from '../../assate/image/navigation.png'

const Header = () => {
    return (
        <>
            <div className='header-slide-content'>
                <div className='header-slide-content-main'>
                    <div className='header-slide-content-icon'>
                        <ul>
                            <li>
                                <img src={userIcons} />
                            </li>
                            <li>
                                <img src={searchIcon} />
                            </li>
                        </ul>
                    </div>
                    <div className='header-button'>
                        <a href='/' >Donate</a>
                    </div>
                </div>
            </div>
            <div className="header_absolute ">
                <div className="page_header_wrapper">
                    <header className="page_header">
                        <div className="page-header-contant">
                            <div className='main-tag-row'>
                                <div className='header-first-artical'>
                                    <a href="/" class="logo">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </div>
                                <div className='header-second-artical'>
                                    <div className='nav-wrap'>
                                        <nav className='top-nav'>
                                            <ul>
                                                <li>
                                                    <a href='/' >Home</a>
                                                </li>
                                                <li>
                                                    <a href='/' >Pages</a>
                                                </li>
                                                <li>
                                                    <a href='/' >Contant</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='icon-list'>
                                        <div className='text-left'>
                                            <a href='/' >Donate</a>
                                        </div>
                                        <div className='icons-chees'>
                                            <ul>
                                                <li>
                                                    <img src={userIcons} />
                                                </li>
                                                <li>
                                                    <img src={searchIcon} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='navigation-menu'>
                                    <img src={navigation} alt='navigation' />
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header

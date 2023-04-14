import React from 'react'
import linkIcon from '../../assate/image/linkIcon.png'

const ATagHtml = () => {


    const btnStyle = {
        padding: '3px 25px',
        marginLeft: '20px',
        border: '0'
    }

    const divStyle = {
        width: '100%',
        height: '100vh',

    }
    const subdiveStyle = {
        display: 'flex',
        width: '100%',
        height: '300px',
        marginTop: '10%'
    }

    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    return (
        <>
            <div>
                <div style={{
                    display: 'flex',
                    // position: 'fixed',
                }}>
                    <a href='#1' style={btnStyle} target="_top">#1</a>
                    <a href='#2' style={btnStyle} target="_top">#2</a>
                    <a href='#3' style={btnStyle} target="_top">#3</a>
                    <a href='#4' style={btnStyle} target="_top">#4</a>
                    <a href='#5' style={btnStyle} target="_top">#5</a>
                    <a href='#6' style={btnStyle} target="_top">#6</a>
                </div>
                <div>
                    <div style={subdiveStyle}>
                        <a href='#1' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='1' style={divStyle}>abcd ---- 1 </div>
                    </div>
                    <div style={subdiveStyle}>
                        <a href='#2' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='2' style={divStyle}>abcd ---- 2 </div>
                    </div>
                    <div style={subdiveStyle}>
                        <a href='#3' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='3' style={divStyle}>abcd ---- 3 </div>
                    </div>
                    <div style={subdiveStyle}>
                        <a href='#4' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='4' style={divStyle}>abcd ---- 4 </div>
                    </div>
                    <div style={subdiveStyle}>
                        <a href='#5' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='5' style={divStyle}>abcd ---- 5 </div>
                    </div>
                    <div style={subdiveStyle}>
                        <a href='#6' >
                            <img src={linkIcon} alt='link' height='20px' />
                        </a>
                        <div id='6' style={divStyle}>abcd ---- 6 </div>
                    </div>
                </div>
            </div>
            {/* <div class="container text-center my-3">
                <div class="row mx-auto my-auto justify-content-center">
                    <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/CB997E/333333?text=1" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 1</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/DDBEA9/333333?text=2" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/FFE8D6/333333?text=3" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 3</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/B7B7A4/333333?text=4" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 4</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/A5A58D/333333?text=5" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 5</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src="https://via.placeholder.com/700x500.png/6B705C/eeeeee?text=6" class="img-fluid" />
                                        </div>
                                        <div class="card-img-overlay">Slide 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ATagHtml
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../Loading/style.css';
import { Link } from 'react-router-dom'
import { Modal, Rate } from 'antd';
import ArrowAnimation from './ArrowAnimation'
import { selectProductRemove, addToCartProduct, removeAddProduct, buyProduct, buyProductNow } from '../actions/productAction'

const CartProduct = () => {

    const [open, setOpen] = useState(false);

    const addCartP = useSelector((state) => state.addCartP)
    const dispatch = useDispatch();


    // const totalProduct = addCartP.addCartP.map((t) => {
    //     return (t.price * t.quantity)
    // })

    return (
        <div>
            <h1>CartProduct</h1>
            <div style={{ marginTop: '4%', position: 'absolute', marginLeft: '4.5%' }}>
                <Link to={'/'}>
                    <ArrowAnimation />
                </Link>

            </div>
            {
                Object.keys(addCartP.addCartP).length === 0 ? (
                    <div
                        style={{
                            display: 'flex',
                            width: '100vw',
                            height: '100%',
                            fontSize: '50px',
                            marginTop: '20%',
                            justifyContent: 'center'
                        }}
                    >
                        Data Not Found
                    </div>
                ) : (
                    <div style={{
                        boxShadow: '1px 1px 8px black', width: '850px', margin: '44px 0 0 27%',
                        height: '740px', overflow: 'auto', padding: '25px',
                        border: '1px solid rgba(140, 140, 140, 0.35)',
                    }}>
                        {
                            addCartP.addCartP.map((val, i) => {
                                return (
                                    <div key={i} style={{ display: 'flex', padding: '10px', marginBottom: '20px', border: '1px solid rgba(140, 140, 140, 1)', width: '785px', height: '180px' }}>
                                        <div style={{ width: '40%', padding: '5px 20px' }}>
                                            <img src={val.image} alt={val.title} width='auto' height='100%' />
                                        </div>
                                        <div style={{ marginLeft: '13px', width: '60%' }}>
                                            <div>
                                                <h4>Title: {val.title}</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                                                    <p><strong>category:</strong> {val.category} </p>
                                                    <p><strong>Prise:</strong> ${val.price}</p>
                                                </div>
                                                <p><strong>Total : $ {(val.price * val.quantity).toFixed(2)}</strong></p>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                <div style={{ display: 'flex' }} >
                                                    {/* <p>Quantity : 1</p> */}
                                                    <div style={{ marginTop: '10px', alignItems: 'center', fontSize: '20px', display: 'flex', padding: '5px 10px', width: '80px', justifyContent: 'space-between', backgroundColor: 'whitesmoke' }}>
                                                        <span style={{ cursor: 'pointer' }} onClick={() => dispatch(removeAddProduct(val))}>-</span>
                                                        <span>{val.quantity}</span>
                                                        <span style={{ cursor: 'pointer' }} onClick={() => dispatch(addToCartProduct(val))}>+</span>
                                                    </div>
                                                    <span style={{ marginLeft: '30px', color: 'red', marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => dispatch(selectProductRemove(val.id))}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div style={{
                                                    marginTop: '10px', display: 'flex', padding: '5px 10px',
                                                }}>
                                                    <button style={{ padding: '5px 20px' }} onClick={() => dispatch(buyProduct(val), setOpen(true))} >Buy Now</button>
                                                    {
                                                        !open ? null :
                                                            <Modal title="BUY NOW" centered open={open} onOk={() => dispatch(buyProductNow(addCartP.productBuy), setOpen(false))} onCancel={() => setOpen(false)} width={1000} >
                                                                <div style={{ display: 'flex' }}>
                                                                    <div style={{ width: '20%', padding: '10px 20px' }}>
                                                                        <img src={addCartP.productBuy.image} width='100px' />
                                                                    </div>
                                                                    <div style={{ width: '75%' }}>
                                                                        <h3>Title :&nbsp;  {addCartP.productBuy.title}</h3>
                                                                        <div style={{ display: 'flex', }}>
                                                                            <p><strong>category :</strong>&nbsp; {addCartP.productBuy.category} </p>
                                                                            <p style={{ marginLeft: '40px' }}><strong>Prise :</strong>&nbsp; ${addCartP.productBuy.price}</p>
                                                                        </div>
                                                                        <p><strong>category :</strong>&nbsp; {addCartP.productBuy.description} </p>
                                                                        <p><strong>Total : $ {(addCartP.productBuy.price * addCartP.productBuy.quantity).toFixed(2)}</strong></p>
                                                                        <p>
                                                                            {<Rate allowHalf disabled defaultValue={addCartP.productBuy.rating.rate} />}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {/* {
                Object.keys(totalProduct).length === 0 ? null
                    : <div style={{ display: 'flex', fontSize: '30px', border: '1px solid rgba(140, 140, 140, 0.35)', justifyContent: 'space-between', padding: '5px 40px', fontWeight: '700', width: '850px', margin: '44px 0 0 27%', }}>
                        <p style={{ margin: '0' }}>Total: </p>
                        <p> $ {totalProduct.reduce((t, v) => t + v).toFixed(2)}</p>
                    </div>
            } */}
        </div>

    )
}

export default CartProduct




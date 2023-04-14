import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApiData } from '../../redux/product/action';
import { Card } from 'antd';

const { Meta } = Card;

const ProductBuy = () => {

  const productData = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData())
  }, [])


  console.log(productData.FetchApiData)

  // category:"men's clothing"
  // description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id:1
  // image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price:109.95
  // rating: { rate: 3.9, count: 120 }
  // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


  return (
    <div className='main-wraper-container'>
      <div className='product-data'>
        <div className='card-data'>
          <div className='first-wrap'>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='example' />
          </div>
          <div className='second-wrap'>

          </div>
        </div>
      </div>
      <span class="loader"></span>
    </div>
  )
}

export default ProductBuy
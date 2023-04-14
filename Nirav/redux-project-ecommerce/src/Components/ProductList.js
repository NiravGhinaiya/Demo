import React, { useEffect } from 'react'
import Header from './Header'
import {  fetchProduct} from '../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from '../Components/ProductComponent'

const ProductList = () => {

  const products = useSelector((state) => state.allProduct.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [])


  return (
    <div>
      <Header />
      <ProductComponent />
    </div>
  )
}

export default ProductList
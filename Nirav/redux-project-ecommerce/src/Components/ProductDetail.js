import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProd, removeSelectedProducts, addToCartProduct } from '../actions/productAction'
import { Rate, message } from 'antd';
import Header from './Header'
import '../Loading/style.css';
import { Link } from 'react-router-dom'
import ArrowAnimation from './ArrowAnimation'


const ProductDetail = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const product = useSelector((state) => state.product)

  const productId = useParams();
  const dispatch = useDispatch();

  let pId = productId.id.slice(1)
  // console.log(pId)

  useEffect(() => {
    if (productId && productId !== '') {
      dispatch(fetchProd(pId))
    }
    return () => {
      dispatch(removeSelectedProducts())
    }
  }, [productId])

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  return (
    <>

      <Header />
      {contextHolder}
      {
        Object.keys(product).length === 0
          ? (
            <figure>
              <div className="dot white"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </figure>

          ) : (
            <>
              <div style={{ display: 'flex', padding: '20px 30px', width: "80%", marginLeft: '10%', marginTop: '3%', height: '800px' }}>

                <div style={{ padding: "30px", width: '50%' }}>
                  <img src={product.image} width='500px' alt={product.category} />
                </div>
                <div style={{ padding: '30px', width: '60%', marginTop: '50px', textAlign: 'justify' }}>
                  <h1>{product.category}</h1>
                  <h2>{product.title}</h2>
                  <h2>Prise : ${product.price}</h2>
                  <p><strong>Description</strong> : {product.description}</p>
                  <p>
                    {<Rate allowHalf disabled defaultValue={product.rating.rate} />}
                  </p>
                  <br />
                  <button style={{ padding: '10px 20px', fontSize: '20px' }} onClick={() => dispatch(addToCartProduct(product),success())}>Add Cart</button>
                  <br />
                  <div style={{ marginTop: '95px', marginLeft: '20px' }}>
                    <Link to={'/'}>
                      <ArrowAnimation />
                    </Link>
                  </div>
                </div>

              </div>

            </>
          )
      }
    </>

  )
}

export default ProductDetail
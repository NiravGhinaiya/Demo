import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Loading/style.css'



const ProductComponent = () => {

  const products = useSelector((state) => state.allProduct.products)
  // const { id, title } = products


  return (
    <>
      <div style={{textAlign:'center', padding:'30px 0'}}>
        <h1> ProductComponent </h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Object.keys(products).length === 0
            ? (
              <figure>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </figure>
            ) : (
              products.map((ele) => {
                return (
                  <div key={ele.id} style={{ border: '1px solid black', margin: '0px 50px 20px ', padding: '20px 30px', width: '500px', height: '400px', color: 'black' }}>
                    <Link to={`/productdetail/:${ele.id}`}>
                      <div style={{ height: '200px' }}>
                        <img src={ele.image} alt='Image' height='100%' />
                      </div>
                      <div style={{ marginTop: '40px', color:'black' }}>
                        <h3>{ele.category}</h3>
                        <p>Title :{ele.title} </p>
                        <p>Prise :{ele.price} </p>
                      </div>
                    </Link>
                  </div>
                )
              })
            )
        }
      </div>
    </>
  )
}

export default ProductComponent
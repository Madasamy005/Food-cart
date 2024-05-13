import React, { useState } from 'react'
import Data from "../assets/Products.json"
import Product from './Product';
import "./Home.css"

const Home = ({cart ,setCart}) => {
  const [products]=useState(Data);
  return (
    <div className='product-container'>
      {products.map((product)=>(
        <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        
      ))}

    </div>
  
   
  )
}

export default Home
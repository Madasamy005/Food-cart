import React from 'react'
import './Product.css'

const Product = ({ product,cart,setCart}) => {

  const Addcart = ()=>{
    setCart([...cart,product])

  }
  const Removecart =()=>{
    setCart(cart.filter((c)=> c.id !== product.id));

  }
  return (
    <div className='product' >
        <div className="img">
            <img src={product.pic} alt={product.name} />
            </div>
       <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product)?<button className='btn' onClick={Removecart}>Remove from cart</button>
        : <button onClick={Addcart}>Add to cart</button>
      }
      
      
       </div>
    </div>
  )
}

export default Product
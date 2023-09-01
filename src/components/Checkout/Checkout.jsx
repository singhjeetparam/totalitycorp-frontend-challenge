import React from 'react'
import './Checkout.scss'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
      }

  return (
    <div className='checkoutWrapper'>
        <div className="checkout">
        <h1>Thank you for shopping with us!!!</h1>
        <button onClick={() => handleClick()}  navigate={navigate}>Go Back to Home</button>
        </div>
    </div>
  )
}

export default Checkout
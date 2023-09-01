import React from 'react'
import './Card.scss'

const Card = ({item: {img, title, oldPrice, price}, onClick}) => {
  return (
    <div className='card' onClick={onClick} >
        <div className="imgSection">
            <img src={img} alt="" />
        </div>
        <div className="text">
            <p>{title}</p>
            <p><span className='oldPrice'><s>${oldPrice}</s></span><span className='price'><strong>${price}</strong></span></p>
        </div>
    </div>
  )
}

export default Card
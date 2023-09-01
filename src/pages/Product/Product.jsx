import React, {useState} from 'react'
import './Product.scss'
import {useParams} from 'react-router-dom'
import data  from '../../data/data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'

const Product = () => {
  const id = useParams().id;
  const item = data.find(i => i.id == id);

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch();

  const incQty = () =>{
    setQuantity(prev=> prev+1)
  }
  const decQty =() =>{
      setQuantity((prev) => (prev === 1? 1: prev-1))
  }
  return (
    <div className='productWrapper'>
      <div className="productImage">
        <img src={item.img} alt="" />
      </div>
      <div className="productInfo">
        <div className="text">
          <h2>{item.title}</h2>
          <p><s>${item.oldPrice}</s> <strong>${item.price}</strong></p>
          <p><i>{item.desc}</i></p>
        </div>
        <div className="quantity">
          <button onClick={decQty}>-</button>
          <span>{quantity}</span>
          <button onClick={incQty}>+</button>
        </div>
        <div className="addToCartBtn" onClick={() => dispatch(addToCart({
          id: item.id,
          title: item.title,
          img: item.img,
          desc: item.desc,
          price: item.price,
          quantity
        }))}>
          <button><strong>Add to Cart</strong></button>
        </div>
      </div>
    </div>
  )
}

export default Product
import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss';
import {useSelector, useDispatch} from'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/checkout`);
      }

    const totalPrice= () =>{
        let total = 0;
        products.forEach((item) => {total += item.quantity * item.price});
        return total
    }

  return (
    <div className='cartContainer'>
        <h2>Products in cart</h2>
        <div className="products">
            {products.map(product =>(
                 <div className="product" key={product.id}>
                 <div className="productImage">
                     <img src={product.img} alt="" />
                 </div>
                 <div className="productInfo">
                     <p><strong>{product.title}</strong></p>
                     <p><sub>{product.quantity} X ${product.price}</sub></p>
                 </div>
                 <div className="delete">
                     <DeleteOutlinedIcon  onClick={() => dispatch(removeItem(product.id))}/>
                 </div>
             </div>
            ))}
           
        </div>
        <div className="total">
            <p><strong>Subtotal : ${totalPrice()}</strong></p>
        </div>
        <div className="checkout">
            <button onClick={() => handleClick()}  navigate={navigate}><strong>Proceed to Checkout</strong></button>
        </div>
    </div>
  )
}

export default Cart
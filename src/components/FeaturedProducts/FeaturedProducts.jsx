import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import {useParams, useNavigate} from 'react-router-dom'

const FeaturedProducts = ({type, filtered}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const handleClick = (key) => {
    navigate(`/product/${key}`);
  }
  return (
    <div className='featured-products'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.</p>
        </div>
        <div className="bottom">
            {filtered.map(item =>(
                <Card key={item.id} item={item} onClick={() => handleClick(item.id)}  navigate={navigate}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
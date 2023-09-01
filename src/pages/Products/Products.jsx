import React, {useState, useEffect} from 'react'
import './Products.scss'
import Card from '../../components/Card/Card'
import data  from '../../data/data'
import {useParams, useNavigate} from 'react-router-dom'

const Products = () => {
  const [selectedType, setSelectedType] = useState([]);
  const [sortedPrice, setSortedPrice] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const {id} = useParams();
  const navigate = useNavigate();

  // let filteredData;

  // if(id === 'men')
  // {
  //   filteredData = data.filter(menData => menData.category === 'men' && (selectedType.length === 0 || selectedType.includes(menData.type)))
  // }
  // if(id === 'women'){
  //   filteredData = data.filter(womenData => womenData.category ==='women' &&  (selectedType.length === 0 || selectedType.includes(womenData.type)))
  // }

  useEffect(() => {
    // Filter the data based on the selected category
    let filteredDataByCategory = [];
    if (id === 'men') {
      filteredDataByCategory = data.filter(
        (menData) =>
          menData.category === 'men' &&
          (selectedType.length === 0 || selectedType.includes(menData.type))
      );
    }
    if (id === 'women') {
      filteredDataByCategory = data.filter(
        (womenData) =>
          womenData.category === 'women' &&
          (selectedType.length === 0 || selectedType.includes(womenData.type))
      );
    }

    // Sort the filtered data based on price
    if (sortedPrice === 'asc') {
      const sortedData = [...filteredDataByCategory].sort((a, b) => a.price - b.price);
      setFilteredData(sortedData);
    } else if (sortedPrice === 'dsc') {
      const sortedData = [...filteredDataByCategory].sort((a, b) => b.price - a.price);
      setFilteredData(sortedData);
    } else {
      setFilteredData(filteredDataByCategory);
    }
  }, [id, selectedType, sortedPrice, data]);


  const handleClick = (key) => {
    navigate(`/product/${key}`);
  }

  const handleProductCategoryChange = (e) => {
    const value = e.target.value;
    if (selectedType.includes(value)) {
      setSelectedType(selectedType.filter((type) => type !== value));
    } else {
      setSelectedType([...selectedType, value]);
    }
  };

  const handleProductPriceSort = (e) => {
    setSortedPrice(e.target.value);
  };
 


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='top' value="top"  onChange={handleProductCategoryChange}/>
            <label htmlFor="top">Top</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" id='bottom' value="bottom" onChange={handleProductCategoryChange}/>
            <label htmlFor="bottom">Bottom</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={handleProductPriceSort}/>
            <label htmlFor="asc">Low to High</label>
          </div>
          <div className="inputItem">
          <input type="radio" id='dsc' value='dsc' name='price'  onChange={handleProductPriceSort}/>
            <label htmlFor="dsc">High to low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="pageBanner">
          <img src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className="productCards">
          {filteredData.map(item =>(
            <Card key={item.id} item={item} onClick={() => handleClick(item.id)}  navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import data  from '../../data/data'

const Home = () => {
  
  let featured = data.filter(item => item.isFeatured === true)
  let trending = data.filter(item => item.isTrending === true)
  
  return (
    <div>
      <HeroBanner />
      <FeaturedProducts type="featured" filtered={featured}/>
      <FeaturedProducts type="trending" filtered={trending}/>
    </div>
  )
}

export default Home
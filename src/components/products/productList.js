import React from 'react'
import ProductCard from './productCard'

const ProductList = ({data}) => {
  return (
    <div style={{
      display: 'flex',
      gap: "18px",
      overflowX: "scroll",
      paddingBottom: "10px"
    }}>
      {data && data.length ? data.map((item, key) => (
        <div key = {key}>
          <ProductCard status={true} data = {item} />
        </div>
      )) : "no data"}
      
    </div>
  )
}

export default ProductList
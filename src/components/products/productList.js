import React from 'react'
import ProductCard from './productCard'

const ProductList = () => {
  return (
    <div style={{
      display:'flex',
      gap:"18px",
      overflowX:"scroll",
      paddingBottom:"10px"
    }}>
      <ProductCard status={false} />
      <ProductCard status={true} />
      <ProductCard status={true} />
      <ProductCard status={true} />
      <ProductCard status={true} />
      <ProductCard status={true} />
      <ProductCard status={true} />
      <ProductCard status={true} />
    </div>
  )
}

export default ProductList
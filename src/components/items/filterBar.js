import React from 'react'
import styles from '../../styles/sass/components/items/filterBar.module.scss'
import Selector from './selector'


const mockDataName = [
  {
    value: "Alphabetical: A - Z",
    label: "Alphabetical: A - Z",
  },
  {
    value: "Alphabetical: Z - A",
    label: "Alphabetical: Z - A",
  },
]

const mockDataPrice = [
  {
    value: "Price: Low to High",
    label: "Price: Low to High",
  },
  {
    value: "Price: High to Low",
    label: "Price: High to Low",
  },
]

const mockDataArrival = [
  {
    value: "Newest",
    label: "Newest",
  },
  {
    value: "Oldest",
    label: "Oldest",
  },
]
const FilterBar = ({ title, }) => {
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <div className={styles.box_filter_selector}>
        <div style={{ fontWeight: "bold" }}>Sort By</div>
        <div>
          <Selector options={mockDataName} title={"Name"} />
        </div>
        <div>
          <Selector options={mockDataPrice} title={"Price"} />
        </div>
        <div>
          <Selector options={mockDataArrival} title={"Date Arrival"} />
        </div>
      </div>
    </div>
  )
}

export default FilterBar
import React from 'react'
import styles from '../../styles/sass/components/items/filterBar.module.scss'
import Selector from './selector'
import { mockDataArrival, mockDataName, mockDataPrice } from '../../constants/mockDataOptions'



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
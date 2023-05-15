import React, { useState, useEffect } from 'react'
import styles from '../../styles/sass/components/items/filterBar.module.scss'
import Selector from './selector'
import { mockDataArrival, mockDataName, mockDataPrice } from '../../constants/mockDataOptions'
import { GrClose } from 'react-icons/gr'


const FilterBar = ({ title, handleChange }) => {
  const [filterSelected, setFilterSelected] = useState({
    name: "",
    price: "",
    arrival: "",
  })
  const [statusSelected, setStatusSelected] = useState(false)
  const { name, price, arrival } = filterSelected

  useEffect(() => {
    if (name || price || arrival) {
      setStatusSelected(false)
    }
  }, [statusSelected, filterSelected, name, price, arrival])


  const onClear = () => {
    setStatusSelected(true)
    setFilterSelected({
      name: "",
      price: "",
      arrival: "",
    })
  }

  const onChangeFilter = (sortBy, value) => {
    setFilterSelected({
      ...filterSelected,
      name: value
    })
    const res = {
      sortBy,
      sort: value
    }
    handleChange(res)
  }

  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <div className={styles.box_filter_selector}>
        <div style={{ fontWeight: "bold" }}>Sort By</div>
        <div>
          <Selector
            options={mockDataName}
            title={"Name"}
            onChange={(e) => onChangeFilter("name", e)}
            statusSelected={statusSelected}
          />
        </div>
        <div>
          <Selector
            options={mockDataPrice}
            title={"Price"}
            onChange={(e) => onChangeFilter("price", e)}

            statusSelected={statusSelected}
          />
        </div>
        <div>
          <Selector
            options={mockDataArrival}
            title={"Date Arrival"}
            onChange={(e) => onChangeFilter("date", e)}

            statusSelected={statusSelected}
          />
        </div>
        {name || price || arrival ? (
          <div onClick={() => onClear()}>
            <GrClose size={25} />
          </div>
        ) : ""}
      </div>
    </div>
  )
}

export default FilterBar
import React, { useState, useEffect } from 'react'
import styles from '../../styles/sass/components/items/selector.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
const Selector = ({ options, title, type, onChange, statusSelected }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({
    value: "",
    label: ""
  })
  const onSelected = (item) => {
    setSelected(item)
    onChange(item.value)
  }
  useEffect(() => {
    if (statusSelected) {
      onSelected({
        value: "",
        label: ""
      })
    }
  }, [statusSelected])

  return (
    <div>
      <div className={styles.box} onClick={() => setOpen(!open)}
        style={{
          border: type === "from" ? '3px solid #B253ED' : "",
          borderRadius: type === "from" ? '20px' : "",
          padding: type === "from" ? '15px' : "",
        }}
      >
        <div>{selected.value ? selected.label : title}</div>
        <MdKeyboardArrowDown size={25} />
        {open && options ? (
          <div className={styles.box_options}>
            {options.map((item, key) => (
              <div className={styles.option_item} key={key} onClick={() => onSelected(item)}>{item.label}</div>
            ))}
          </div>
        ) : ""}
      </div>

    </div>
  )
}

export default Selector
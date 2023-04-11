import React, { useState } from 'react'
import styles from '../../styles/sass/components/items/selector.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
const Selector = ({ options, title }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({
    value: "",
    label: ""
  })
  return (
    <div>
      <div className={styles.box} onClick={() => setOpen(!open)}>
        <div>{selected.value ? selected.label : title}</div>
        <MdKeyboardArrowDown size={25} />
        {open && options ? (
          <div className={styles.box_options}>
            {options.map((item, key) => (
              <div className={styles.option_item} key={key} onClick={() => setSelected(item)}>{item.label}</div>
            ))}
          </div>
        ) : ""}
      </div>

    </div>
  )
}

export default Selector
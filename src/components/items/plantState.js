import React, { useState } from 'react'
import styles from '../../styles/sass/pages/plantDetail.module.scss'
import { mockDataPlantState } from '../../constants/mockDataPlantState'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { MdRadioButtonUnchecked } from 'react-icons/md'
console.log('%cMyProject%cline:3%cmockDataPlantState', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px', mockDataPlantState)

const PlantState = ({ data }) => {
  const [checked, setChecked] = useState("")
  console.log('%cMyProject%cline:9%cchecked', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(23, 44, 60);padding:3px;border-radius:2px', checked)
  const onMapNewPlantsState = mockDataPlantState.map((item) => (
    {
      ...item,
      status: item.id === data.id ? true : false
    }
  ))


  return (
    <>
      <div className={styles.but_ready}>
        <div>{data.name}</div>
      </div>
      <div>
        <ul>
          {onMapNewPlantsState.map((item, key) => (
            <React.Fragment key={key}>
              {item.name === "sold" || item.name === "reserved" ? (
                <>
                  <li className={styles.checkbox_list_item}
                    onClick={() => setChecked(item.id)}
                    style={{
                      color: item.status || item.name === 'sold' || item.name === "reserved" ? 'black' : ""
                    }}
                  >
                    {checked === item.id ? (
                      <RiCheckboxBlankCircleFill size={30} color='#9B7DBF' />
                    ) : (
                      <MdRadioButtonUnchecked size={30} />
                      )}
                    <div>
                      <strong>{item.name}</strong>
                      <div>{item.description}</div>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className={styles.checkbox_list_item}
                    style={{
                      color: item.status || item.name === 'sold' || item.name === "reserved" ? 'black' : ""
                    }}
                  >
                    {item.status ? (
                      <RiCheckboxBlankCircleFill size={30} color='#9B7DBF' />
                    ) : (
                      <MdRadioButtonUnchecked size={30} />
                      )}
                    <div>
                      <strong>{item.name}</strong>
                      <div>{item.description}</div>
                    </div>
                  </li>
                </>
              )}
            </React.Fragment>
          ))}
          {/* <div>
            <label htmlFor=""
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center"
              }}
              onClick={() => setChecked(true)}
            >
              {checked ? (
                <RiCheckboxBlankCircleFill size={30} color='#9B7DBF' />
              ) : (
                <MdRadioButtonUnchecked size={30} />
              )}
              <div>{"test"}</div>
            </label>
          </div> */}
        </ul>
      </div>
      <div>
        <button className={styles.but_apply}>Apply</button>
      </div>
    </>
  )
}

export default PlantState
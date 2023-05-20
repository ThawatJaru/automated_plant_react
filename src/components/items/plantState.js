import React, { useState } from 'react'
import styles from '../../styles/sass/pages/plantDetail.module.scss'
import { mockDataPlantState } from '../../constants/mockDataPlantState'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { changePlantState } from '../../services/api/plants'

const PlantState = ({ data }) => {
  const [checked, setChecked] = useState("")
  const [loading, setLoading] = useState(false)
  const onMapNewPlantsState = mockDataPlantState.map((item) => (
    {
      ...item,
      status: (item.id === checked) || (item.id === data.id && !checked) ? true : false
    }
  ))

  const onApply = async (id) => {
    setLoading(true)
    setTimeout(async () => {
      const data = {
        plant_state_id: id
      }
      await changePlantState(id, data)
      setLoading(false)
    }, 1000);
  }
  return (
    <>
      {loading ? (
        <div
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"300px"
          }}
        >Loading...</div>
      ) : (
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
            <button
              className={styles.but_apply}
              onClick={() => onApply(checked)}
              disabled={checked ? false : true}
            >
              Apply
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default PlantState
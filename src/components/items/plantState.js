import React, { useState } from 'react'
import styles from '../../styles/sass/pages/plantDetail.module.scss'
import { mockDataPlantState } from '../../constants/mockDataPlantState'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { changePlantState } from '../../services/api/plants'
import { useParams } from 'react-router-dom'

const PlantState = ({ data }) => {
  const [checked, setChecked] = useState({
    description: "",
    id: "",
    name: "",
    status: null
  })
  console.log('%cMyProject%cline:10%cchecked', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', checked)
  const [loading, setLoading] = useState(false)
  const param = useParams()
  const onMapNewPlantsState = mockDataPlantState.map((item) => (
    {
      ...item,
      status: (item.id === checked.id) || (item.id === data.id && !checked.id) ? true : false
    }
  ))

  const onApply = async (p_id, id) => {
    setLoading(true)
    setTimeout(async () => {
      const data = {
        plant_state_id: id
      }
      await changePlantState(p_id, data)
      setLoading(false)
    }, 1000);
  }
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px"
          }}
        >Loading...</div>
      ) : (
        <>
          <div className={styles.but_ready}>
            <div>{checked.name ? checked.name: data.name}</div>
          </div>
          <div>
            <ul>
              {onMapNewPlantsState.map((item, key) => (
                <React.Fragment key={key}>
                  {item.name === "sold" || item.name === "reserved" || item.id === data.id ? (
                    <>
                      <li className={styles.checkbox_list_item}
                        onClick={() => setChecked(item)}
                        style={{
                          color: item.status || item.name === 'sold' || item.name === "reserved" || item.id === data.id ? 'black' : ""
                        }}
                      >
                        {checked.id === item.id || (item.id === data.id && !checked.id) ? (
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
              onClick={() => onApply(param.id, checked.id)}
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
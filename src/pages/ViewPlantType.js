import React, { useState, useEffect } from 'react'
import Selector from '../components/items/selector'
import { mockDataName2 } from '../constants/mockDataOptions'
import styles from '../styles/sass/pages/viewPlantType.module.scss'
import PlantTypeList from '../components/cards/plantTypeList'
import { Link } from 'react-router-dom'
import { getAllPlantType } from '../services/api/plant'
const ViewPlantType = () => {
  const [catSelected, setCatSelected] = useState("ALL")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [body, setBody] = useState({
    name: "name",
    order: "desc"
  })
  const onGetPlantTypes = async () => {
    setLoading(true)
    const res = await getAllPlantType(body.name, body.order)
    if (res) {
      setData(res.data)
      setLoading(false)
    }
  }
  const onSortName = (value) => {
    setBody({
      ...body,
      order: value
    })
  }

  useEffect(() => {
    onGetPlantTypes()
  }, [body])

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh"
      }}
    >
      <div className={styles.box_header}>
        <div style={{
          gridColumn: 'span 2 / span 2',
        }} >
          <Link to='/home-admin' className="btn_back_edit_location">
            <div>
              <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
            </div>
            <div className="pos_text_back">
              Back
            </div>
          </Link>
        </div>
        <div
          style={{
            gridColumn: 'span 2 / span 2',
            textAlign: 'center'
          }}
        >
          <h2>View Plant Types</h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            gridColumn: 'span 2 / span 2',
            justifyContent: 'end'

          }}
        >
          <strong>Sort By</strong>
          <Selector options={mockDataName2} title={"Name"}
            onChange={(e) => onSortName(e)}
          />
        </div>
      </div>

      {/* grid */}
      <div className={styles.box_list}>
        <div
          style={{
            gridColumn: 'span 6 / span 6',
          }}
        >
          {data && data.length && !loading ? (
            <PlantTypeList data={data} />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {loading ? (
                <>Loading</>
              ) : (
                <h1 style={{
                  color: "red"
                }} >
                  "No Plant types are available to display"
                </h1>
              )}
            </div>
          )}
        </div>
        <div className={styles.box_menu}>
          <div className={styles.box_menu_item} onClick={() => setCatSelected("ALL")}>
            <div>
              <div>
                <img
                  className={`${catSelected === "ALL" ? styles.box_icon_grid : styles.p}`}
                  src='/img/icon/icon_grid.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className={styles.box_menu_item} onClick={() => setCatSelected("INDOOR")}>
            <div>
              <img
                className={`${catSelected === "INDOOR" ? styles.box_icon_grid : styles.p}`}
                src='/img/icon/icon_menu_indoor.svg'
                alt=''
              />
            </div>
          </div>
          <div className={styles.box_menu_item} onClick={() => setCatSelected("OUTDOOR")}>
            <div>
              <img
                className={`${catSelected === "OUTDOOR" ? styles.box_icon_grid : styles.p}`}
                src='/img/icon/icon_menu_outdoor.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/add-plant-type">
        <div className='my_but_plus'>
          <img src="img/icon/icon_plus.svg" alt="" width="40" height="40" />
        </div>
      </Link>
    </div>
  )
}

export default ViewPlantType
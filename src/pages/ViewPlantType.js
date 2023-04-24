import React from 'react'
import Selector from '../components/items/selector'
import { mockDataName } from '../constants/mockDataOptions'
import styles from '../styles/sass/pages/viewPlantType.module.scss'
import PlantTypeList from '../components/cards/plantTypeList'
import { Link } from 'react-router-dom'
const ViewPlantType = () => {
  return (
    <div>
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
          <Selector options={mockDataName} title={"Name"} />
        </div>
      </div>

      {/* grid */}
      <div className={styles.box_list}>
        <div
          style={{
            gridColumn: 'span 6 / span 6',
          }}
        >
          <PlantTypeList />
        </div>
        <div className={styles.box_menu}>
          <div className={styles.box_menu_item}>
            <div>
              <div>
                <img
                  className={styles.box_icon_grid}
                  src='/img/icon/icon_grid.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className={styles.box_menu_item}>
            <div>
              <img
                src='/img/icon/icon_menu_indoor.svg'
                alt=''
              />
            </div>
          </div>
          <div className={styles.box_menu_item}>
            <div>
              <img
                src='/img/icon/icon_menu_outdoor.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPlantType
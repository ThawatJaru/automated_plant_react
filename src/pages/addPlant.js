import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import styles from '../styles//sass/pages/addPlant.module.scss'
import Selector from '../components/items/selector'
const AddPlant = () => {
  return (
    <div
      style={{
        minHeight: '90vh',
        position: 'relative',
      }}
    >
      <a href='/machine-location' className="btn_back_edit_location">
        <div>
          <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
        </div>
        <div className="pos_text_back">
          Back
        </div>
      </a>
      <div style={{ marginTop: "20px" }}>
        <h2>Insert plant to Slot</h2>
      </div>
      {/* from */}
      <form action="">
        <div className={styles.grid_form}>
          {/* grid1 */}
          <div>
            <label htmlFor="file"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className={styles.box_input_img}>
                <BiImageAdd size={130} />
              </div>
              <div className={styles.but_select_img}>Select Image</div>
              <input type="file" id='file' />
            </label>
          </div>
          {/* grid 2 */}
          <div>
            <div className={`${styles.flex_col}`}>
              <div className='asterisk'>Select plant’s type</div>
              <Selector title={"Cactus"} type={"from"} />
            </div>
            <div className={styles.flex_col} style={{ marginTop: "30px" }}>
              <div className='asterisk'>Price</div>
              <div className={styles.flex}>
                <input type="text"
                  placeholder='price'
                  style={{
                    border: '3px solid #B253ED',
                    borderRadius: '20px',
                    padding: '15px',
                    width: "70px"
                  }}
                />
                <div>Baht</div>
              </div>
            </div>
          </div>
          {/* grid 3 */}
          <div>
            <div className={styles.flex_col}>
              <div className='asterisk'>Select plant’s type</div>
              <Selector title={"Please select.."} type={"from"} />
            </div>
          </div>
          <div
            style={{
              gridColumn: " 2 / span 2",
              gridColumnStart: "1"
            }}
          >
            <div className={styles.box_detail}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <div className={`italic`}>Intensity</div>
                  <div className={`mt_10 text_lg`}
                    style={{
                      position: "relative"
                    }}
                  >
                    <strong>Direct</strong>
                    <img src='/img/icon/icon_checkbox_active.svg' alt='' width={22} className={`${styles.img_checkbox}`} />
                  </div>
                </div>
                <div>
                  <div className={`italic`}>Lighting</div>
                  <div className={`mt_10 text_lg`}>
                    <strong>Full Sun</strong>
                  </div>
                </div>
                <div className={`italic`}>
                  <div>Duration (per day)</div>
                  <div className={`mt_10 text_lg`}>at least 6 hours</div>
                </div>
              </div>
              <div className={`${styles.flex} mt_10`}>
                <div className='italic'>Watering :</div>
                <div>Every</div>
                <strong className='text_purple'>6</strong>
                <div>Days</div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div>
        <button className={`${styles.but_next}`}>Next</button>
      </div>
    </div>
  )
}

export default AddPlant
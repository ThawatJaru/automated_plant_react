import React from 'react'
import styles from '../../styles/sass/pages/plantDetail.module.scss'

const PlantDetailPage = () => {
  return (
    <div >
      <button className="btn_back_edit_location">
        <div className>
          <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
        </div>
        <div className="pos_text_back">
          Back
        </div>
      </button>
      <div>
        <h2>---  Plant State  ---</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            marginTop: "10px",
            gap: "15px"
          }}
        >
          {/* grid1 */}
          <div>
            <div style={{
              maxWidth: "260px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minHeight: '80vh'
            }}>
              <div className={styles.box_image}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
                  <div>
                    <div className={styles.sku}>A02</div>
                  </div>
                </div>
                <img src="/img/product2.png" alt="" width={180} />
              </div>
              <div >
                <h2>Round Cactus</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>Door Status</div>
                <div className={'text_red italic'} >Closed</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button className={styles.but_unlock}>Unlock</button>
              </div>
            </div>
          </div>
          {/* grid2 */}
          <div style={{ position: "relative" }}>
            <div className={styles.but_ready}>
              <div>Ready</div>
            </div>
            <div>
              <ul>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>waiting</strong>
                    <div>{`(waiting for additional data)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>pending</strong>
                    <div>{`(data complete but no actual plant)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <img src='/img/icon/icon_checkbox_active.svg' alt='' width={22} />
                  <div>
                    <strong>ready</strong>
                    <div>{`(ready to be sold)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>due</strong>
                    <div>{`(due date of taking care)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>disabled</strong>
                    <div>{`(temporary disabled by staff)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>sold</strong>
                    <div>{`(has been sold)`}</div>
                  </div>
                </li>
                <li className={styles.checkbox_list_item}>
                  <div className='my_gray_checkbox' />
                  <div>
                    <strong>reserved</strong>
                    <div>{`(paid but hasn’t pick up)`}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <button className={styles.but_apply}>Apply</button>
            </div>
          </div>
          {/* grid3 */}
          <div>
            <div>
              <div className={styles.box_detail}>
                <div style={{ gap: "30px" }} className='flex_center'>
                  <div style={{ minWidth: "50px" }}>
                    <img src="/img/icon/icon_stop_water.png" alt="" width={"40px"} />
                  </div>
                  <div>
                    <div>Watering</div>
                    <strong>Every 6 Days</strong>
                  </div>
                </div>
                <div style={{ gap: "30px" }} className='flex_center'>
                  <div>
                    <img src="/img/icon/icon_flower.png" alt="" width={"50px"} />
                  </div>
                  <div>
                    <div>Intensity</div>
                    <strong>Direct</strong>
                  </div>
                </div>
                <div style={{ gap: "30px" }} className='flex_center'>
                  <div>
                    <img src="/img/icon/icon_sun.png" alt="" width={"50px"} />
                  </div>
                  <div>
                    <div>Light</div>
                    <strong>Full Sun</strong>
                  </div>
                </div>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "end",
              }}>
                <div className={styles.text_date}>Watering Schedule: 16-Feb-2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantDetailPage
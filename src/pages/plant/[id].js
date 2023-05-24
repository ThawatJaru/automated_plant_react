import React, { useState, useContext, useEffect } from 'react'
import styles from '../../styles/sass/pages/plantDetail.module.scss'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getPlants, plantCloseDoor, plantOpenDoor, webhookToggleDoor } from '../../services/api/plants'
import { AppContext } from '../../appState/store'
import PlantState from '../../components/items/plantState'

const PlantDetailPage = () => {
  const { machineId } = useContext(AppContext)
  const param = useParams()
  const navigate = useNavigate();

  const [dataPlant, setDataPlant] = useState()
  const [doorStatus, setDoorStatus] = useState(false)

  const onGetDataPlant = async () => {
    const { data } = await getPlants(machineId, param.id)
    if (data) {
      setDataPlant(data)
    }
  }

  const onToggleDoor = async (open, id, status_code) => {
    setDoorStatus(open)
    if (open) {
      const res = await plantOpenDoor(id)
      if (res) {
        const payload = {
          slot_code: status_code,
          status: "opened"
        }
        const resDoor = await webhookToggleDoor(param.id, payload)
        if (resDoor) {
          setDoorStatus(open)
        }
      }
    } else {
      const res = await plantCloseDoor(id)
      if (res) {
        const payload = {
          slot_code: status_code,
          status: "closed"
        }
        webhookToggleDoor(param.id, payload)
      }
    }
  }

  useEffect(() => {
    if (machineId && param) {
      onGetDataPlant()
    } else {
      navigate('/home-admin')
    }
  }, [param, machineId])

  return (
    <>
      {dataPlant && (
        <div >
          <Link to='/home-admin' className="btn_back_edit_location">
            <div>
              <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
            </div>
            <div className="pos_text_back">
              Back
            </div>
          </Link>
          <div>
            <h2 style={{ textAlign: "center" }} >---  Plant State  ---</h2>
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
                      {dataPlant.plant_type.category.name === "indoor" && (
                        <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
                      )}
                      {dataPlant.plant_type.category.name === "outdoor" && (
                        <img src="/img/icon/icon_outdoor.svg" alt="" width={30} />
                      )}
                      <div>
                        <div className={styles.sku}>
                          {dataPlant.slot.slot_code}
                        </div>
                      </div>
                    </div>
                    <img src={dataPlant.image} alt="" width={180} />
                  </div>
                  <div >
                    <h2>{dataPlant.plant_type.name}</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <div>Door Status</div>
                    {doorStatus ? (
                      <div className={'text_green italic'} >Open</div>
                    ) : (
                      <div className={'text_red italic'} >Closed</div>
                    )}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {doorStatus ? (
                      <button className={styles.but_unlock} onClick={() => onToggleDoor(false, param.id, dataPlant.slot.slot_code)}>Lock</button>
                    ) : (
                      <button className={styles.but_unlock} onClick={() => onToggleDoor(true, param.id, dataPlant.slot.slot_code)}>Unlock</button>
                    )}
                  </div>
                </div>
              </div>
              {/* grid2 */}
              <div style={{ position: "relative" }}>
                <PlantState data={dataPlant.plant_state} />
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
                        <strong>Every {dataPlant.plant_type.watering_period} Days</strong>
                      </div>
                    </div>
                    <div style={{ gap: "30px" }} className='flex_center'>
                      <div>
                        <img src="/img/icon/icon_flower.png" alt="" width={"50px"} />
                      </div>
                      <div>
                        <div>Intensity</div>
                        <strong>{dataPlant.plant_type.preset.intensity.name}</strong>
                      </div>
                    </div>
                    <div style={{ gap: "30px" }} className='flex_center'>
                      <div>
                        <img src="/img/icon/icon_sun.png" alt="" width={"50px"} />
                      </div>
                      <div>
                        <div>Light</div>
                        <strong>{dataPlant.plant_type.preset.lighting.name}</strong>
                      </div>
                    </div>
                  </div>
                  {/* <div style={{
                    display: "flex",
                    justifyContent: "end",
                  }}>
                    <div className={styles.text_date}>Watering Schedule: 16-Feb-2023</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlantDetailPage
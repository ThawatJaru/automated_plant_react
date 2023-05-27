import React from 'react'
import styles from '../../styles/sass/components/cards/plantTypeCard.module.scss'
import { useNavigate } from 'react-router-dom'
const PlantTypeCard = ({ data, onDelete }) => {
  console.log('%cMyProject%cline:4%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(179, 214, 110);padding:3px;border-radius:2px', data)
  const route = useNavigate()

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.flex}>
          {data.category.name === "indoor" && (
            <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
          )}
          {data.category.name === "outdoor" && (
            <img src="/img/icon/icon_outdoor.svg" alt="" width={30} />
          )}
          <strong>{data.name}</strong>
        </div>
        <div>
          <div className={styles.flex}>
            <div>Lighting</div>
            <strong>{data.preset.lighting.name}</strong>
          </div>
          <div className={styles.flex}>
            <div>Intensity</div>
            <strong>{data.preset.intensity.name}</strong>
          </div>
          <div className={styles.flex}>
            <div>Duration</div>
            <strong>{'>= 6 hours'}</strong>
          </div>
        </div>
        <div>Watering: Every {data.watering_period} Days </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "5px",
          marginTop: "10px",
          maxWidth: "300px"
        }}
      >
        <button className={styles.but_edit} onClick={() => route(`/edit-plant-type/${data.id}`)}>Edit</button>
        <button className={styles.but_del} onClick={() => onDelete(data.id)}>Delete</button>
      </div>
    </div>
  )
}

export default PlantTypeCard
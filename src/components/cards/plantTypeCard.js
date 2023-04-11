import React from 'react'
import styles from '../../styles/sass/components/cards/plantTypeCard.module.scss'
const PlantTypeCard = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.flex}>
          <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
          <strong>Cactus</strong>
        </div>
        <div>
          <div className={styles.flex}>
            <div>Lighting</div>
            <strong>Full Sun</strong>
          </div>
          <div className={styles.flex}>
            <div>Intensity</div>
            <strong>Direct</strong>
          </div>
          <div className={styles.flex}>
            <div>Duration</div>
            <strong>{'>= 6 hours'}</strong>
          </div>
        </div>
        <div>Watering: Every 6 Days </div>
      </div>
      <div 
        style={{
          display:"flex",
          justifyContent:"end",
          gap:"5px",
          marginTop:"10px",
        }}
      >
        <button className={styles.but_edit}>Edit</button>
        <button className={styles.but_del}>Delete</button>
      </div>
    </div>
  )
}

export default PlantTypeCard
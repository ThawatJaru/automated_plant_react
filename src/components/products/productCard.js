import React from 'react'
import styles from '../../styles/sass/components/products/productCard.module.scss'
const ProductCard = ({ status }) => {
  return (
    <div className={styles.box}
      style={{
        border: `5px solid ${!status ? "#990000" : "none"}`
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
          <div>
            {!status ? (
              <div className={styles.text_error}>Data Missing</div>
            ) : (
              <div className={styles.sku}>A02</div>
            )}
          </div>
        </div>
        <div className={styles.box_image}>
          <img src="/img/product.png" alt="" width={180} />
          <div className={styles.icon_delete}>
            <img src="/img/icon/icon_delete.svg" alt="" width={20} />
          </div>
        </div>
        <div className={styles.box_price}>
          <div>
            <div>Small Cactus</div>
            <div style={{ fontSize: "22px" }}>21.9 Baht</div>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px"
          }}>
            <div>
              <button className={styles.but_edit}>Edit</button>
            </div>
            <div>
              <button className={styles.but_black}>Manager</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
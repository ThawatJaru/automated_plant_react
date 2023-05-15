import React from 'react'
import styles from '../../styles/sass/components/products/productCard.module.scss'
const ProductCard = ({ status, data }) => {
  console.log('%cMyProject%cline:3%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', data)
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
          {data.plant_type.category.name === "indoor" && (
            <img src="/img/icon/icon_indoor.svg" alt="" width={30} />
          )}
          {data.plant_type.category.name === "outdoor" && (
            <img src="/img/icon/icon_outdoor.svg" alt="" width={30} />
          )}
          <div>
            {!status ? (
              <div className={styles.text_error}>Data Missing</div>
            ) : (
              <div className={styles.sku}>{data.slot.slot_code}</div>
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
            <div>{data.plant_type.name}</div>
            <div style={{ fontSize: "22px" }}>{data.price} Baht</div>
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
              <button className={styles.but_black}>Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
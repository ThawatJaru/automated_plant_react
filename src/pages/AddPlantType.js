import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/sass/pages/addPlantType.module.scss'
import Checkbox from '../components/items/checkbox'
const cat_data = [
  {
    id: '47a2cf72-c89f-4ba9-8f0e-3943bd0c5132',
    name: 'Indoor',
    description: null
  },
  {
    id: 'c559fc61-6e3a-4f72-9a0e-bd6faeb25d58',
    name: 'Outdoor',
    description: null
  }
]
const AddPlantType = () => {
  const [dataFrom, setDataFrom] = useState({
    name: "Spider Plant",
    description: "An air-purifying plant that is easy to care for and propagate.",
    category_id: "47a2cf72-c89f-4ba9-8f0e-3943bd0c5130",
    preset_id: "97007e9d-54d3-4a12-91f5-96c7a19daecb",
    watering_period: 10,
    document_name: "spider-plant.pdf",
    document: ""
  })
  const [category, setCategory] = useState("")
  console.log('%cMyProject%cline:27%ccategory', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', category)

  const onChangeType = (value) => {
    if (value) {
      setCategory(value)
    }
  }
  useEffect(() => {

  }, [category])

  return (
    <div
      style={{
        minHeight: '90vh',
        position: 'relative',
      }}
    >
      <Link to='/home-admin' className="btn_back_edit_location">
        <div>
          <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
        </div>
        <div className="pos_text_back">
          Back
        </div>
      </Link>

      {/* contents */}
      <form>
        <div className={`${styles.grid}`}>
          <div>
            <div>
              <h2>Add Plant’s Type</h2>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px"
              }}
            >
              <div>
                <div className='asterisk'>Plant’s Type </div>
                <div className={`${styles.outline_input}`}
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className=""
                    name="name"
                    style={{ width: "400px" }}
                  />
                </div>
              </div>
              <div>
                <div className='asterisk'>Category</div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px"
                  }}
                >
                  {cat_data.length && cat_data.map((item, key) => (
                    <div key={key}>
                      <Checkbox label={item.name} handleChange={(e) => onChangeType(e)} value={item.id} isChecked={category == item.id ? true : false} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className='asterisk italic'>Look after your plants</h2>
            </div>

            <div className={`${styles.bg_purple}`}>
              <div
                style={{
                  textAlign: "center"
                }}
              >Intensity</div>
              <div>Lighting</div>
              <div>Duration (per day)</div>

              <strong>
                <Checkbox label={"Direct"} />
              </strong>
              <strong>Full Sun</strong>
              <strong>at least 6 hours</strong>

              <strong>
                <Checkbox label={"Direct"} />
              </strong>
              <strong>Partial Sun</strong>
              <strong>3 - 6 hours</strong>

              <strong>
                <Checkbox label={"Indirect"} />
              </strong>
              <strong>Partial Shade</strong>
              <strong>3 - 6 hours</strong>

              <strong>
                <Checkbox label={"Indirect"} />
              </strong>
              <strong>Low Light</strong>
              <strong>2 - 3 hours</strong>


              <div style={{
                gridColumn: "span 3 / span 3"
              }}>
                <div className='asterisk italic'>Watering</div>
                <div className={`${styles.flex_col}`}>
                  <div className={`${styles.flex_col}`}>
                    <div>Every</div>
                    <div className={`${styles.outline_input}`}
                      style={{
                        width: "40px",
                      }}
                    >
                      <input type="number" placeholder='0' />
                    </div>
                    <div className='asterisk'>Days</div>
                  </div>
                  <div className={`${styles.but_purple}`}>
                    <label htmlFor="file" >
                      <div>Select Document</div>
                      <input type="file" id="file" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            gridColumn: 'span 2 / span 2'
          }}>
            <div>
              <div className='asterisk'>Type Description</div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className={`${styles.outline_input}`}
                  placeholder='Description..'
                  style={{
                    borderRadius: "50px",
                    paddingLeft: "30px",
                    marginTop: "20px",
                    width: '70%'
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div>
        <button className={`${styles.but_purple}`}
          style={{
            position: "absolute",
            right: "0",
            bottom: "5px",
            fontSize: "30px"
          }}
        >
          <strong>Submit</strong>
        </button>
      </div>
    </div>
  )
}

export default AddPlantType
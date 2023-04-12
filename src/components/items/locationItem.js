import React from 'react'

const LocationItem = ({ data }) => {
  return (
    <div className="location_container_all">
      <div className="location_container_items_left">
        <div>
          <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
        </div>
        <div>
          <div className="location_name">
            {data.name}
          </div>
          <div className="slots_service">
            {data.description}
          </div>
        </div>
      </div>
      <div className="location_container_items_right">
        <a href="/home_admin">
          <button className="btn_submit">
            Select
          </button>
        </a>
        <a href="/edit_location">
          <button className="btn_edit">
            Edit
          </button>
        </a>
        <button className="btn_remove">
          <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  )
}

export default LocationItem
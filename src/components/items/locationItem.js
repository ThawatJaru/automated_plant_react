import React from 'react'
import { deleteMachine } from '../../services/api/machines'

const LocationItem = ({ data }) => {

  const onDelete = async (id) => {
    await deleteMachine('00000000-0000-4000-8000-000000000000', id)
    window.location.reload()
  }
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
            In Service: {data.capacity} slots
          </div>
        </div>
      </div>
      <div className="location_container_items_right">
        <a href="/home-admin">
          <button className="btn_submit">
            Select
          </button>
        </a>
        <a href="/edit-location">
          <button className="btn_edit">
            Edit
          </button>
        </a>
        <button className="btn_remove" onClick={() => onDelete(data.id)}>
          <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  )
}

export default LocationItem
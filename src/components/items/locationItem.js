import React from 'react'
import { deleteMachine } from '../../services/api/machines'
import { Link } from 'react-router-dom'

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
            In Service:
            <span
              style={{
                color: `${data.capacity === 0 && "red"}`
              }}
            >{data.capacity}</span>
            slots
          </div>
        </div>
      </div>
      <div className="location_container_items_right">
        <Link to="/home-admin">
          <button className="btn_submit">
            Select
          </button>
        </Link>
        <Link to={`/edit-location/${data.id}`}>
          <button className="btn_edit">
            Edit
          </button>
        </Link>
        <button className="btn_remove" onClick={() => onDelete(data.id)}>
          <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  )
}

export default LocationItem
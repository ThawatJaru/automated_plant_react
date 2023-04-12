import LocationItem from "../components/items/locationItem";
import { getAllMachine } from "../services/api/machines";
import React, { useEffect, useState } from "react"

function Location() {
  const [data, setData] = useState()
  const onGetData = async () => {
    const res = await getAllMachine("00000000-0000-4000-8000-000000000000")
    if (res) {
      setData(res.data)
    }
  }

  useEffect(() => {
    onGetData()
  }, [])

  return (
    <>
      <h1 className="header_machine_text">Choose your machine</h1>
      <br>

      </br>
      <label className="Find_location" id="border_loc">
        <div className="pos_icon_search">
          <img src="/img/icon/icon_search.svg" alt="" width="25" height="25" />
        </div>
        <div className="pos_plant_search">
          <input type="text" placeholder="Find your location" className="plant_search" value="" />
        </div>
      </label>

      <br>
      </br>
      <h2 className="Available_loc">Available Location</h2>

      <br>
      </br>

      <div
        style={{
          maxHeight:"50vh",
          overflow:"scroll",
          paddingRight:"10px",
        }}
      >
        {data && data.length ? data.map((item, key) => (
          <div key={key}>
            <LocationItem data={item} />
          </div>
        )) : (
          <div style={{textAlign:"center"}}>
            Loading
            </div>
        )}
      </div>

      <a href="/add-location">
        <div className="pos_plus_btn">
          <button className="btn_add">
            <img src="img/icon/icon_plus.svg" alt="" width="40" height="40" />
          </button>
        </div>
      </a>
    </>
  );
}

export default Location;
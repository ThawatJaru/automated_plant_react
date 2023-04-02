function Location() {
  return (
    <>
      <body className = "location_body">
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

        <div className="location_container_all">
          <div className="location_container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div className="location_name">
                Lad Krabang
              </div>
              <div className="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>
          <div className="location_container_items_right">
            <button className="btn_submit">
              Select
            </button>
            <a href="/Edit_location.html">
              <button className="btn_edit">
                Edit
              </button>
            </a>
            <button className="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>
          </div>
        </div>

        <div className="location_container_all">
          <div className="location_container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div className="location_name">
                Lad Krabang
              </div>
              <div className="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>

          <div className="location_container_items_right">
            <button className="btn_submit">
              Select
            </button>
            <button className="btn_edit">
              Edit
            </button>
            <button className="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>

          </div>
        </div>

        <div className="location_container_all">


          <div className="location_container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div className="location_name">
                Lad Krabang
              </div>
              <div className="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>

          <div className="location_container_items_right">
            <button className="btn_submit">
              Select
            </button>
            <a href="/Edit_location.html">
              <button className="btn_edit">
                Edit
              </button>
            </a>
            <button className="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>

          </div>
        </div>

        <a href="/add_location">
          <div className="pos_plus_btn">
            <button className="btn_add">
              <img src="img/icon/icon_plus.svg" alt="" width="40" height="40" />
            </button>
          </div>
        </a>
      </body>
    </>
  );
}

export default Location;
import './styles/page/location.css'

function Location() {
  return (
    <>
      <body>
        <h1 classname="header_text">Choose your machine</h1>

        <label classname="Find_location" id="border_loc" onclick="color_input()">
          <div classname="pos_icon_search">
            <img src="/img/icon/icon_search.svg" alt="" width="25" height="25" />
          </div>
          <div classname="pos_plant_search">
            <input type="text" placeholder="Find your location" classname="plant_search" value="" />
          </div>
        </label>

        <br>
        </br>
        <h2 classname="Available_loc">Available Location</h2>

        <br>
        </br>

        <div classname="container_all">
          <div classname="container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div classname="location_name">
                Lad Krabang
              </div>
              <div classname="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>
          <div classname="container_items_right">
            <button classname="btn_submit">
              Select
            </button>
            <a href="/Edit_location.html">
              <button classname="btn_edit">
                Edit
              </button>
            </a>
            <button classname="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>
          </div>
        </div>

        <div classname="container_all">
          <div classname="container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div classname="location_name">
                Lad Krabang
              </div>
              <div classname="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>

          <div classname="container_items_right">
            <button classname="btn_submit">
              Select
            </button>
            <button classname="btn_edit">
              Edit
            </button>
            <button classname="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>

          </div>
        </div>

        <div classname="container_all">


          <div classname="container_items_left">
            <div>
              <img src="img/icon/icon_location.svg" alt="" width="70" height="70" />
            </div>
            <div>
              <div classname="location_name">
                Lad Krabang
              </div>
              <div classname="slots_service">
                In Service: 2/3 slots
              </div>
            </div>
          </div>

          <div classname="container_items_right">
            <button classname="btn_submit">
              Select
            </button>
            <a href="/Edit_location.html">
              <button classname="btn_edit">
                Edit
              </button>
            </a>
            <button classname="btn_remove">
              <img src="img/icon/icon_bin.svg" alt="" width="20" height="20" />
            </button>

          </div>
        </div>

        <a href="/Add_location.html">
          <div classname="pos_plus_btn">
            <button classname="btn_add">
              <img src="img/icon/icon_plus.svg" alt="" width="40" height="40" />
            </button>
          </div>
        </a>
      </body>
    </>
  );
}

export default Location;
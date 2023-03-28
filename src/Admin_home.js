import './styles/page/admin_home.css';

function Admin_home() {
    return (
        <>
            <body>
                <div classname="container_all">
                    <div classname="container_left">
                        <h1>
                            Plant Manager
                        </h1>
                        <div>
                            <img src="/img/plant_manager_logo.svg" alt="" width="45" height="64"/>
                        </div>
                    </div>
                    <div classname="container_right">
                        <div classname="pos_btn_insert_plant">
                            <button classname="btn_insert_plant">
                                <div classname="pos_icon">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20"/>
                                </div>
                                <div classname="pos_text_insert">
                                    Insert Plant
                                </div>
                            </button>
                        </div>

                        <div classname="pos_btn_insert_plant">
                            <button classname="btn_view_type">
                                <div classname="pos_icon">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20"/>
                                </div>
                                <div classname="pos_text_insert">
                                    View Type
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <label classname="Find_location" id="border_loc">
                    <div classname="pos_icon_search">
                        <img src="/img/icon/icon_search.svg" alt="" width="25" height="25"/>
                    </div>
                    <div classname="pos_plant_search">
                        <input type="text" placeholder="Find your location" classname="plant_search" value=""/>
                    </div>
                </label>
            </body>
        </>
    );
}

export default Admin_home;

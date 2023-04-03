function Home_admin() {
    return (
        <>
            <body className = "home_admin_body">
                <div className="container_all_home_admin">
                    <div className="container_left_home_admin">
                        <h1 className = "plant_manager_home_admin">
                            Plant Manager
                        </h1>
                        <div>
                            <img src="/img/plant_manager_logo.svg" alt="" width="45" height="64" />
                        </div>
                    </div>
                    <div className="container_right_home_admin">
                        <div className="pos_btn_insert_plant_home_admin">
                            <button className="btn_insert_plant_home_admin">
                                <div className="pos_icon_home_admin">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20" />
                                </div>
                                <div className="pos_text_insert_home_admin">
                                    Insert Plant
                                </div>
                            </button>
                        </div>

                        <div className="pos_btn_insert_plant_home_admin">
                            <button className="btn_view_type_home_admin">
                                <div className="pos_icon_home_admin">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20" />
                                </div>
                                <div className="pos_text_insert_home_admin">
                                    View Type
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            <div className = "pos_text_label_home_admin">
                <label className="Find_location" id="border_loc">
                    <div className="pos_icon_search">
                        <img src="/img/icon/icon_search.svg" alt="" width="25" height="25" />
                    </div>
                    <div className="pos_plant_search">
                        <input type="text" placeholder="Find your location" className="plant_search" value="" />
                    </div>
                </label>
                </div>
            
            <div className = "plant_category_big_container">
                <div className = "btn_all">

                   
                </div>
                <div>
                    test
                </div>
                <div>
                    test
                </div>
            </div>
            </body>
        </>
    );
}

export default Home_admin;

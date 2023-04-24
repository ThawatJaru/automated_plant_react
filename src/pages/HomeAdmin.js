import React, { useState } from 'react'
import styles from '../styles/sass/pages/homeAdmin.module.scss'
import FilterBar from '../components/items/filterBar'
import ProductList from '../components/products/productList'
const HomeAdmin = () => {
    const [catSelected, setCatSelected] = useState("ALL")
    return (
        <>
            <div className="container_all_home_admin">
                <div className="container_left_home_admin">
                    <h1 className="plant_manager_home_admin" style={{ fontWeight: "bold" }}>
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
                            <a href="/add-plant">
                                <div className="pos_text_insert_home_admin">
                                    Insert Plant
                                </div>
                            </a>
                        </button>
                    </div>

                    <div className="pos_btn_insert_plant_home_admin">
                        <button className="btn_view_type_home_admin">
                            <div className="pos_icon_home_admin">
                                <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20" />
                            </div>
                            <a href="/view-plant-type">
                                <div className="pos_text_insert_home_admin">
                                    View Type
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pos_text_label_home_admin">
                <label className="Find_location" id="border_loc">
                    <div className="pos_icon_search">
                        <img src="/img/icon/icon_search.svg" alt="" width="25" height="25" />
                    </div>
                    <div className="pos_plant_search">
                        <input type="text" placeholder="Find your location" className="plant_search" value="" />
                    </div>
                </label>
            </div>

            <div className={styles.box_menu}>
                <div className={styles.box_menu_item} onClick={() => setCatSelected("ALL")}>
                    <div>
                        <div>
                            <img
                                className={`${catSelected === "ALL" && styles.box_icon_grid}`}
                                src='/img/icon/icon_grid.svg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.box_menu_item} onClick={() => setCatSelected("INDOOR")}>
                    <div>
                        <img
                            className={`${catSelected === "INDOOR" && styles.box_icon_grid}`}
                            src='/img/icon/icon_menu_indoor.svg'
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles.box_menu_item} onClick={() => setCatSelected("OUTDOOR")}>
                    <div>
                        <img
                            className={`${catSelected === "OUTDOOR" && styles.box_icon_grid}`}
                            src='/img/icon/icon_menu_outdoor.svg'
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => setCatSelected("ALL")}>
                    All
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => setCatSelected("INDOOR")}>
                    Indoor
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => setCatSelected("OUTDOOR")}>
                    Outdoor
                </div>
            </div>
            <div>
                <FilterBar title={"List of the plants"} />
            </div>
            <div
                style={{
                    marginTop: "20px"
                }}
            >
                <ProductList />
            </div>
        </>
    )
}

export default HomeAdmin
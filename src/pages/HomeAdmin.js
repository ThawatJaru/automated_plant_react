import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/sass/pages/homeAdmin.module.scss'
import FilterBar from '../components/items/filterBar'
import ProductList from '../components/products/productList'
import { Link, useNavigate } from 'react-router-dom'
import { getAllPlants } from '../services/api/plants'
import { AppContext } from '../appState/store'
import { cat_data } from './ViewPlantType'
const HomeAdmin = () => {
    const navigate = useNavigate();

    const { machineId } = useContext(AppContext)
    const [dataProductList, setDataProductList] = useState()
    const [catSelected, setCatSelected] = useState("")
    const [loading, setLoading] = useState(false)
    const [payload, setPayload] = useState({
        m_id: machineId,
        cat_id: catSelected,
        search: "",
        sort: "",
        sortBy: ""
    })

    const getData = async () => {
        setLoading(true)
        const res = await getAllPlants(payload)
        const filter = res.data.filter((item) => item.location.id === machineId)
        setTimeout(() => {
            if (filter) {
                setDataProductList(filter)
                setLoading(false)
            }
        }, 500);
    }

    const onChangeFilters = async (value) => {
        setLoading(true)
        setDataProductList([])
        setPayload({
            ...payload,
            sort: value.sort,
            sortBy: value.sortBy
        })
        setLoading(false)
    }
    const onChangeCat = (value, type) => {
        setLoading(true)
        setDataProductList([])
        setCatSelected(type)
        setPayload({
            ...payload,
            cat_id: value
        })
        setLoading(false)

    }
    useEffect(() => {
        getData()
        if (!machineId) {
            navigate('/machine-location')
        }
    }, [payload, catSelected])

    return (
        <>
            <div className="container_all_home_admin">
                <div className="container_left_home_admin">
                    <h1 className="plant_manager_home_admin" style={{ fontWeight: "bold" }}>
                        Plant Manager
                    </h1>
                    <div onClick={() => navigate('/')}>
                        <img src="/img/plant_manager_logo.svg" alt="" width="45" height="64" />
                    </div>
                </div>
                <div className="container_right_home_admin">
                    <div className="pos_btn_insert_plant_home_admin">
                        <Link to='/insert-plant-slot'>
                            <button className="btn_insert_plant_home_admin">
                                <div className="pos_icon_home_admin">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20" />
                                </div>
                                <div className="pos_text_insert_home_admin">
                                    Insert Plant
                                </div>
                            </button>
                        </Link>
                    </div>

                    <div className="pos_btn_insert_plant_home_admin">
                        <Link to='/view-plant-type'>
                            <button className="btn_view_type_home_admin">
                                <div className="pos_icon_home_admin">
                                    <img src="/img/icon/icon_arrow.svg" alt="" width="20" height="20" />
                                </div>

                                <div className="pos_text_insert_home_admin">
                                    View Type
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pos_text_label_home_admin">
                <label className="Find_location" id="border_loc">
                    <div className="pos_icon_search">
                        <img src="/img/icon/icon_search.svg" alt="" width="25" height="25" />
                    </div>
                    <div className="pos_plant_search">
                        <input type="text" placeholder="Find your plant" className="plant_search" onChange={(e) => setPayload({
                            ...payload,
                            search: e.target.value
                        })} />
                    </div>
                </label>
            </div>

            <div className={styles.box_menu}>
                <div className={styles.box_menu_item} onClick={() => onChangeCat("", "ALL")}>
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
                <div className={styles.box_menu_item} onClick={() => onChangeCat(cat_data[0].id, "INDOOR")}>
                    <div>
                        <img
                            className={`${catSelected === "INDOOR" && styles.box_icon_grid}`}
                            src='/img/icon/icon_menu_indoor.svg'
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles.box_menu_item} onClick={() => onChangeCat(cat_data[1].id, "OUTDOOR")}>
                    <div>
                        <img
                            className={`${catSelected === "OUTDOOR" && styles.box_icon_grid}`}
                            src='/img/icon/icon_menu_outdoor.svg'
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => onChangeCat("ALL")}>
                    All
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => onChangeCat("OUTDOOR")}>
                    Indoor
                </div>
                <div className={styles.box_menu_item} style={{ fontWeight: "bold" }} onClick={() => onChangeCat("OUTDOOR")}>
                    Outdoor
                </div>
            </div>
            <div>
                <FilterBar title={"List of the plants"} handleChange={onChangeFilters} />
            </div>
            <div
                style={{
                    marginTop: "20px"
                }}
            >
                {dataProductList && dataProductList.length > 0 ? (
                    <ProductList data={dataProductList} />
                ) : (
                    <strong
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "60px"
                        }}
                    >
                        {loading ? "Loading..." : "No data available"}
                    </strong>
                )}
            </div>
        </>
    )
}

export default HomeAdmin
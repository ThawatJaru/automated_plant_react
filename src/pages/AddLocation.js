import React, { useState } from 'react'
import { createMachine } from '../services/api/machines'

const AddLocation = () => {
    const [dataForm, setDataForm] = useState({
        name: null,
        description: null,
        capacity: null,
    })
    const [error, setError] = useState({
        status: false,
        massage: ""
    })
    const onCreate = async (data) => {
        if (!dataForm.name || !dataForm.description || !dataForm.capacity) {
            setError({
                status: true,
                massage: "something went wrong"
            })
            return
        }
        await createMachine("00000000-0000-4000-8000-000000000000", data)
    }

    const onChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }
    console.log(error)
    return (
        <>
            <a href='/machine-location' className="btn_back_edit_location">
                <div>
                    <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
                </div>
                <div className="pos_text_back">
                    Back
                </div>
            </a>

            <h1 className="add_loc_text_machine">
                Add your machine's location
            </h1>

            <form action="" onChange={onChangeDataForm}>
                <div className="big_container_add_location">
                    <div className="container_loc_name_add_location">
                        <div className="style_loc_name_add_location">
                            Location Name *
                        </div>
                        <div className="pos_input_loc_add_location">
                            <input type="text" placeholder="Name" className="loc_name_add_location" name="name" value={dataForm.name} />
                        </div>
                    </div>
                    <div className="container_cap_add_location">
                        <div className="style_loc_name_add_location">
                            Capacity *
                        </div>
                        <div className="pos_input_loc_add_location">
                            <input type="number" placeholder="3" className="cap_add_add_location" name="capacity" value={dataForm.capacity} />
                            <i className="pos_slots_text_add_location">Slots</i>
                        </div>
                    </div>
                </div>

                <div className="big_container_add_location">
                    <div className="container_loc_name_add_location">
                        <div className="style_loc_name_add_location">
                            Location Description (Optional)
                        </div>
                        <div className="pos_input_loc_add_location">
                            <textarea id="" cols="30" rows="10" placeholder="Description.." className="loc_description_add_location" name="description" value={dataForm.description} />
                        </div>
                    </div>
                </div>
            </form>

            <div className="pos_btn_submit_add_location">
                <button className="btn_submit_add_location" onClick={() => onCreate(dataForm)}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default AddLocation
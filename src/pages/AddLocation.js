import React from 'react'

const AddLocation = () => {
    return (
        <>
            <body className="body_add_location">
                <a href="/machine_location" className="a_add_location">
                    <div className="pos_back_btn_add_location">
                        <button className="btn_back_add_location">
                            <div className>
                                <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
                            </div>
                            <div className="pos_text_back_add_location">
                                Back
                            </div>
                        </button>
                    </div>
                </a>

                <h1 className="add_loc_text_machine">
                    Add your machine's location
                </h1>

                <div className="big_container_add_location">
                    <div className="container_loc_name_add_location">
                        <div className="style_loc_name_add_location">
                            Location Name *
                        </div>
                        <div className="pos_input_loc_add_location">
                            <input type="text" placeholder="Name" className="loc_name_add_location" />
                        </div>
                    </div>
                    <div className="container_cap_add_location">
                        <div className="style_loc_name_add_location">
                            Capacity *
                        </div>
                        <div className="pos_input_loc_add_location">
                            <input type="text" placeholder="3" className="cap_add_add_location" />
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
                            <textarea name="" id="" cols="30" rows="10" placeholder="Description.." className="loc_description_add_location"></textarea>
                        </div>
                    </div>
                </div>

                <div className="pos_btn_submit_add_location">
                    <button className="btn_submit_add_location">
                        Submit
                    </button>
                </div>

            </body>
        </>
    )
}

export default AddLocation
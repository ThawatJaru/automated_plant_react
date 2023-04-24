import { Link } from "react-router-dom";

function EditLocation() {
    return (
        <>
            <body className="body_edit_location">
                <Link to='/machine-location' className="btn_back_edit_location">
                    <div>
                        <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
                    </div>
                    <div className="pos_text_back">
                        Back
                    </div>
                </Link>

                <h1 className="edit_location_text">
                    Edit your machine's location
                </h1>

                <div className="big_container_edit_location">
                    <div className="container_loc_name_edit_location">
                        <div className="style_loc_name_edit_location">
                            Location Name *
                        </div>
                        <div className="pos_input_loc_edit_location">
                            <input type="text" placeholder="Name" className="loc_name_add_edit_location" />
                        </div>
                    </div>
                    <div className="container_cap_edit_location">
                        <div className="style_loc_name_edit_location">
                            Capacity *
                        </div>
                        <div className="pos_input_loc_edit_location">
                            <input type="text" placeholder="3" className="cap_add_edit_location" />
                            <i className="pos_slots_text_edit_location">Slots</i>
                        </div>
                    </div>
                </div>

                <div className="big_container_edit_location">
                    <div className="container_loc_name_edit_location">
                        <div className="style_loc_name_edit_location">
                            Location Description (Optional)
                        </div>
                        <div className="pos_input_loc_edit_location">
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Description.."
                                className="loc_description_add_edit_location"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="pos_btn_submit_edit_location">
                    <button className="btn_submit_edit_location">
                        Submit
                    </button>
                </div>
            </body>
        </>
    );
}

export default EditLocation;

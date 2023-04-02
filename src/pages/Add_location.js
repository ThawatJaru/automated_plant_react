function Add_location() {
    return (
        <>
            <body classname = "body_add_location">
                <a href="/machine_location" classname = "a_add_location">
                    <div classname="pos_back_btn_add_location">
                        <button classname="btn_back_add_location">
                            <div classname>
                                <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10"/>
                            </div>
                            <div classname="pos_text_back_add_location">
                                Back
                            </div>
                        </button>
                    </div>
                </a>

                <h1 classname = "add_loc_text_machine">
                    Add your machine's location
                </h1>

                <div classname="big_container_add_location">
                    <div classname="container_loc_name_add_location">
                        <div classname= "style_loc_name_add_location">
                            Location Name *
                        </div>
                        <div classname= "pos_input_loc_add_location">
                            <input type="text" placeholder="Name" classname="loc_name_add"/>
                        </div>
                    </div>
                    <div classname="container_cap_add_location">
                        <div classname= "style_loc_name_add_location">
                            Capacity *
                        </div>
                        <div classname="pos_input_loc_add_location">
                            <input type="text" placeholder="3" classname="cap_add_add_location"/>
                                <i classname="pos_slots_text_add_location">Slots</i>
                        </div>
                    </div>
                </div>

                <div classname="big_container_add_location">
                    <div classname="container_loc_name_add_location">
                        <div classname= "style_loc_name_add_location">
                            Location Description (Optional)
                        </div>
                        <div classname= "pos_input_loc_add_location">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Description.." classname="loc_description_add_location"></textarea>
                        </div>
                    </div>
                </div>

                <div classname="pos_btn_submit_add_location">
                    <button classname="btn_submit_add_location">
                        Submit
                    </button>
                </div>

            </body>
        </>
    );
}

export default Add_location;
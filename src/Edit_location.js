import './styles/page/edit_location.css';

function Edit_location() {
    return (
        <>
            <body>
                <a href="/Choose_location.html">
                    <div classname="pos_back_btn">
                        <button classname="btn_back">
                            <div classname>
                                <img src="/img/icon/icon_arrow.svg" alt="" width="10" height="10" />
                            </div>
                            <div classname="pos_text_back">
                                Back
                            </div>
                        </button>
                    </div>
                </a>

                <h1>
                    Edit your machine's location
                </h1>

                <div classname="big_container">
                    <div classname="container_loc_name">
                        <div classname="style_loc_name">
                            Location Name *
                        </div>
                        <div classname="pos_input_loc">
                            <input type="text" placeholder="Name" classname="loc_name_add" />
                        </div>
                    </div>
                    <div classname="container_cap">
                        <div classname="style_loc_name">
                            Capacity *
                        </div>
                        <div classname="pos_input_loc">
                            <input type="text" placeholder="3" classname="cap_add" />
                            <i classname="pos_slots_text">Slots</i>
                        </div>
                    </div>
                </div>

                <div classname="big_container">
                    <div classname="container_loc_name">
                        <div classname="style_loc_name">
                            Location Description (Optional)
                        </div>
                        <div classname="pos_input_loc">
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Description.."
                                classname="loc_description_add"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div classname="pos_btn_submit">
                    <button classname="btn_submit">
                        Submit
                    </button>
                </div>
            </body>
        </>
    );
}

export default Edit_location;

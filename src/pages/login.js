import { loginService } from "../services/api/staff/login";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    username: null,
    password: null,
  })
  const [error, setError] = useState({
    status: false,
    massage: ""
  })
  
  const onLogin = async (data) => {
    if (!dataForm.username || !dataForm.password) {
      setError({
        status: true,
        massage: "something went wrongsssss"
      })
      return
    }
    const res = await loginService(data)
    if (res) {
      navigate("/machine-location")
    }
  }

  const onChangeDataForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="pos_login">
        <h1 className="login_text">Login</h1>
      </div>
      <div className="pos_plant_logo">
        <img src="/img/plant_logo.svg" alt="" width="190" height="198" className="pos_img" />
      </div>
      {/* error massage */}
      <div
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        {error.status && error.massage}
      </div>
      <form action="" onChange={onChangeDataForm}>
        <div className="container_all_login">
          <div className="container_items_left_login">
            <div>
              <img src="img/icon/icon_user.svg" alt="" width="33" height="34" />
            </div>
            <div className="text_username">
              Username
            </div>
          </div>
          <div className="container_items_right_login">
            <div className="pos_input_user">
              <input type="text" placeholder="Username" className="input_username" name="username" value={dataForm.username} />
            </div>
          </div>
        </div>

        <div className="container_all_login">
          <div className="container_items_left_login">
            <div>
              <img src="img/icon/icon_lock.svg" alt="" width="33" height="34" />
            </div>
            <div className="text_username">
              Password
            </div>
          </div>
          <div className="container_items_right_login">
            <div className="pos_input_pass">
              <input type="text" placeholder="Password" className="input_password" name="password" value={dataForm.password} />
            </div>
          </div>
        </div>
      </form>

      <div className="pos_btn_login">
        <button className="btn_login" onClick={() => onLogin(dataForm)}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;

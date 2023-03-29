import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorText, setErrorText] = useState("")
  
  let route = useNavigate();

  const onLogin = (name, pass) => {
    if (name === "admin" && pass === "123456") {
      route("/location")
      console.log("login successful")
    } else {
      console.log("login error")
      // clear state
      setUsername("")
      setPassword("")

      // set error text
      setErrorText("login error")
    }
  }

  return (
    <div>
      <div className="pos_login">
        <h1>Login</h1>
      </div>
      <div className="pos_plant_logo">
        <img src="/img/plant_logo.svg" alt="" width="190" height="198" className="pos_img" />
      </div>

      <div className="container_all">
        <div className="container_items_left">
          <div>
            <img src="img/icon/icon_user.svg" alt="" width="33" height="34" />
          </div>
          <div className="text_username">
            Username
          </div>
        </div>
        <div className="container_items_right">
          <div className="pos_input_user">
            <input value={username} type="text" placeholder="Username" className="input_username" onChange={(e) => setUsername(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="container_all">
        <div className="container_items_left">
          <div>
            <img src="img/icon/icon_lock.svg" alt="" width="33" height="34" />
          </div>
          <div className="text_username">
            Password
          </div>
        </div>
        <div className="container_items_right">
          <div className="pos_input_pass">
            <input value={password} type="text" placeholder="Password" className="input_password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
      </div>

    {/* show error text */}
      <div style={{ color: "red", textAlign:"center" }}>{errorText}</div>

      <div className="pos_btn_login">
        <button className="btn_login" onClick={() => onLogin(username, password)}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage
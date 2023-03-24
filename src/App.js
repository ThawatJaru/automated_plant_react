import './styles/page/login.css'

function App() {
  return (
    <>
      <div className="pos_login">
        <h1>Login</h1>
      </div>
      <div className="pos_plant_logo">
        <img src="/img/plant_logo.svg" alt="" width="190" height="198" className="pos_img"/>
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
            <input type="text" placeholder="Username" className="input_username"/>
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
            <input type="text" placeholder="Password" className="input_password"/>
          </div>
        </div>
      </div>

      <div className="pos_btn_login">
        <button className="btn_login">
          Login
        </button>
      </div>
    </>
  );
}

export default App;

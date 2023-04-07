import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/page/login.css';
import './styles/page/location.css';
import './styles/page/add_location.css';
import './styles/page/edit_location.css';
import './styles/page/home_admin.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



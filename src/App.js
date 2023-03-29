import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import './styles/pages/login.css';
import './styles/pages/location.css';
import HomePage from './pages/home';
import LocationPage from './pages/location';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/location' element={<LocationPage />} />
      </Routes>
    </>
  );
}

export default App;

import Login from './pages/Login.js';
import { Route, Routes } from 'react-router-dom';
import EditLocation from './pages/EditLocation.js';
import HomeAdmin from './pages/HomeAdmin.js';
import AddLocation from './pages/AddLocation.js'
import ViewPlantType from './pages/ViewPlantType.js';


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/add-location' element={<AddLocation />} />
                <Route path='/edit-location' element={<EditLocation />} />
                <Route path='/home-admin' element={<HomeAdmin />} />
                <Route path='/view-plant-type' element={<ViewPlantType />} />
            </Routes>
        </>
    )
}

export default App;
import Login from './pages/Login.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EditLocation from './pages/EditLocation.js';
import HomeAdmin from './pages/HomeAdmin.js';
import AddLocation from './pages/AddLocation.js'
import ViewPlantType from './pages/ViewPlantType.js';
import PlantDetailPage from './pages/plant/[id].js';
import AddPlant from './pages/addPlant.js';
import Location from './pages/Location.js';
import { useEffect, useContext } from 'react'
import { AppContext } from './appState/store.js';

function App() {
    const { user } = useContext(AppContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.id) {
            console.log("please login")
            navigate('/')
        }
    }, [user, navigate])

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/machine-location' element={<Location />} />
                <Route path='/add-location' element={<AddLocation />} />
                <Route path='/edit-location' element={<EditLocation />} />
                <Route path='/home-admin' element={<HomeAdmin />} />
                <Route path='/view-plant-type' element={<ViewPlantType />} />
                <Route path='/plant/:id' element={<PlantDetailPage />} />
                <Route path='/add-plant' element={<AddPlant />} />
            </Routes>
        </>
    )
}

export default App;
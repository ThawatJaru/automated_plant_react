import Login from './pages/Login.js';
import { Route, Routes} from 'react-router-dom';
import Location from './pages/Location.js';
import Add_location from './pages/Add_location.js';
import Edit_location from './pages/Edit_location.js';



function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/machine_location' element = {<Location/>}/>
                <Route path='/add_location' element = {<Add_location/>}/>
                <Route path='/edit_location' element = {<Edit_location/>}/>
            </Routes>
        </>
    )
}

export default App;
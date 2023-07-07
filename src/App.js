import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Routes , Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Discount from './pages/Discount'
import Reservations from './pages/Reservations'
import Tournaments from './pages/Tournaments'
import Notifications from './pages/Notifications'
import Sidebar from './component/Sidebar';
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route path='/sidebar' element={<Sidebar/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="employees" element={<Employees/>} />
      <Route path="discounts" element={<Discount/>} />
      <Route path="tournaments" element={<Tournaments/>} />
      <Route path="reservations" element={<Reservations/>} />
      <Route path="notifications" element={<Notifications/>} />
      </Route>
      </Route>
    </Routes>

    
  );
}

export default App;
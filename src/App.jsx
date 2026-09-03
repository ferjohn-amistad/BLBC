import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Schedule from './pages/Schedule.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
// import { supabase } from './lib/supabaseClient.js'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
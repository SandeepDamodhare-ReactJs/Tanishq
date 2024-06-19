import { Login } from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { Register } from './components/Register'

function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ProductFantasi from './pages/admin/productFantasi'
import ProductRomance from './pages/admin/ProductRomance'
import ProductSelfDev from './pages/admin/ProductSelfDev'
import CustLayout from './layouts/CustLayout'
import FantasiBooksPage from './pages/customer/FantasiBooksPage'
import Home from './pages/customer/Home'
import LoginPage from './Login/LoginPage'
import SignUp from './Login/SignUp'
import About from './pages/customer/About'

function App() {

  return (
    <Routes>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<ProductFantasi/>}/>
          <Route path="product-fantasi" element={<ProductFantasi/>}/>
          <Route path="product-romance" element={<ProductRomance/>}/>
          <Route path="product-selfdev" element={<ProductSelfDev/>}/>
        </Route>

        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        
        
        <Route path="/home" element={<CustLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path='fiction-book' element={<FantasiBooksPage/>}/>        


        </Route>

    </Routes>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePages from './pages/HomePages'
import Slider from './components/layout/slider'
import Products_detail from './pages/products-detail'
import Layout from './components/layout/Admin/Admin_Layout'
import Logins from './pages/Client/login'
import Signup from './pages/Client/signup'
import ProductsAdmin from './pages/Admin/productsAdmin'
import AddProducts_Admin from './pages/Admin/AddProducts_Admin'
import EditProducts_Admin from './pages/Admin/EditProducts_Admin'
import { useLocalStorage } from './hooks'
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='login' element={<Logins />} />
      <Route path='signup' element={<Signup />} />
      <Route path='/' element={<UserLayout />}>
        <Route index path='/' element={<HomePages />} />
        <Route path='products-detail/:id' element={<Products_detail />} />

      </Route>

      <Route path='/admin' element={<Layout />}>
        <Route index path='/admin' element={<ProductsAdmin />} />
        <Route path='add-products' element={<AddProducts_Admin />} />
        <Route path='edit-products/:id' element={<EditProducts_Admin />} />
      </Route>


    </Routes>
  </BrowserRouter>
}

export default App
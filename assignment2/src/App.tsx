import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePages from './pages/HomePages'
import Slider from './components/layout/slider'
import Products_detail from './components/layout/products-detail'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePages />} />
        <Route path='detail' element={<h1>â</h1>} />
        <Route path='products-detail/:id' element={<Products_detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
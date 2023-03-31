import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePages from './pages/HomePages'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePages />} />
        <Route path='detail' element={<h1>Chi tiết</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
import Slider from "../components/layout/slider"
import Products from "../components/products"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
const HomePages = () => {
    return <>


        <Slider />

        <h1>Điện Thoại Nổi Bật</h1>
        <div className="grid xl:grid-cols-7  gap-5  sm:grid-cols-4">

            <Products />


        </div >

    </>
}

export default HomePages
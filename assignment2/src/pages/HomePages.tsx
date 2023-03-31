import Slider from "../components/layout/slider"
import Products from "../components/products"

const HomePages = () => {
    return <>
        <Slider />
        <h1>Điện Thoại Nổi Bật</h1>
        <div className="grid grid-cols-7 gap-5">
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
        </div>
    </>
}

export default HomePages
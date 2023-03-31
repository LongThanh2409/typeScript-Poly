import Products from "../components/products"

const HomePages = () => {
    return <>
        <h1>Điện Thoại Nổi Bật</h1>
        <div className="grid grid-cols-5 gap-5">
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
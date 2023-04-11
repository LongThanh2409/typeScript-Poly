import Slider from "../components/layout/slider"
import { getProducts } from "../Api/products"
import { IProducts } from "../interfaces/products"
import Products from "../components/products"
import { useEffect, useState } from "react"
const HomePages = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getProducts()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return <>


        <Slider />

        <h1 className="my-10 text-xl ml-10">Điện Thoại Nổi Bật</h1>
        <div className="grid xl:grid-cols-5 gap-5  sm:grid-cols-4">

            {products.map(product => <Products
                data={product}
                key={product._id} />)}


        </div >

    </>
}

export default HomePages
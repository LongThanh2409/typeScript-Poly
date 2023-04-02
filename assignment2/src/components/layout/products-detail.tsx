import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProduct } from "../../Api/products"
import Products from "../../interfaces/products"

const Products_detail = (): JSX.Element => {
    const { id } = useParams()
    const [product, SetProduct] = useState([])
    const [nameProducts, SetnameProducts] = useState("")
    const [priceProducts, SetpriceProducts] = useState("")
    const [Old_priceProducts, SetOld_priceProducts] = useState("")
    const [descriptionProducts, SetdescriptionProducts] = useState("")
    const [imagesProducts, SetimagesProducts] = useState([])
    useEffect(() => {

        getProduct(id!).then(({ data }) => {

            SetProduct(data),
                SetnameProducts(data.nameProducts),
                SetpriceProducts(data.priceProducts),
                SetOld_priceProducts(data.OldPriceProducts),
                SetdescriptionProducts(data.descriptionProducts),
                SetimagesProducts(data.imagesProducts)

        })
    }, [id])

    return <>
        <nav className=" text-black shadow-lg ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">

                        <div className="ml-10 flex items-baseline space-x-2">
                            <Link to={"/"}>
                                <span className="hover:underline px-2 py-2 rounded-md text-sm font-medium">Trang chủ</span>
                            </Link>

                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">Điện thoại</a>
                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">iPhone</a>
                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">iPhone 13</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* Tên sản phẩm */}
        <h2 className="capitalize text-lg ml-24 py-4 font-semibold text-gray-800">{nameProducts}</h2>
        {/* hr */}
        <hr className="border-t-4" />

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">



            <div className="lg:flex  ">
                <div className=" min-w-0">

                    <img className=" w-[358px] object-cover lg:h-full lg:w-96" src="/phone.png" alt="Product Image" />
                </div>
                <div className=" flex lg:mt-0 lg:ml-10">
                    <div className="max-w-full flex flex-col justify-between ml-32">




                        <div className="mt-4">
                            {/* Giá sản phẩm */}
                            <span className="mt-1 text-2xl  font-semibold text-red-500">{priceProducts}</span>
                            {/* Giá cũ của sản phẩm */}
                            <span className="mt-1 ml-1 text-sm font-semibold text-gray-500">{Old_priceProducts}</span>
                            {/* Mô tả sản phẩm */}
                            <p className=" text-sm font-sans text-gray-600">{descriptionProducts} </p>
                        </div>

                    </div>



                </div>
            </div>
            <div className="mt-10 ml-24 flex">

                <div className="flex -mx-2">
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src="/phone.png" alt="Thumbnail 1" />
                    </div>
                    <div className="w-1/12 w-12 h-12">
                        <img className=" w-full  object-cover cursor-pointer" src="/phone.png" alt="Thumbnail 2" />
                    </div>
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src="/phone.png" alt="Thumbnail 3" />
                    </div>
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src="/phone.png" alt="Thumbnail 4" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-96 m-auto">
                    <div className="">

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-14 rounded">
                            Mua ngay
                        </button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col mt-10 items-center justify-center  bg-gray-100 p-4">
                <h1 className="text-red-500 text-lg font-bold mb-4">ĐẶC ĐIỂM NỔI BẬT</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae faucibus diam. Nullam at mi risus. Cras eget sem nec nisi dapibus ullamcorper. Ut consequat urna ipsum, eu pharetra neque luctus in.</p>
            </div>
        </div>

    </>
}

export default Products_detail
import { IProducts } from "../interfaces/products"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getProduct } from "../Api/products"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Products_detail = () => {

    // assertion
    const [product, setProduct] = useState<IProducts>({} as IProducts)

    const { id } = useParams()


    const fetchProductById = async () => {
        const { data } = await getProduct(id!)
        setProduct(data)

    }
    useEffect(() => {
        fetchProductById()
    }, [id])

    return <>




        <nav className=" text-black shadow-lg ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">

                        <div className="ml-10 flex items-baseline space-x-2">
                            <Link to={"/"}>
                                <span className="hover:underline px-2 py-2 rounded-md text-sm font-medium">Trang chủ </span>
                            </Link>
                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">Điện thoại</a>

                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">{product?.categoryId?.name} </a>





                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">{product?.nameProducts}</a>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* Tên sản phẩm */}
        <h2 className="capitalize text-lg ml-24 py-4 font-semibold text-gray-800">{product?.nameProducts}</h2>
        {/* hr */}
        <hr className="border-t-4" />

        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">



            <div className="flex  lg:flex  ">
                <div className="w">
                    {/* Ảnh sản sản phẩm */}


                    <Carousel width={300} >
                        {/* {product.images?.map((image, index) => (
                <div key={index}>
                    <img src={image.base_url} alt={`Product ${index}`} />
                </div>
            ))} */}
                        <img className=" w-auto h-full object-cover lg:h-full lg:w-96" src={product?.imagesProducts} alt="" />
                        <img className=" w-auto object-cover lg:h-full lg:w-96" src={product?.imagesProducts} alt="" />

                    </Carousel>

                </div>
                <div className=" w-4/6 lg:mt-0 lg:ml-10">
                    <div className="max-w-ful flex flex-col justify-between ml-32">




                        <div className="mt-4">
                            {/* Giá sản phẩm */}
                            <span className="mt-1 text-2xl  font-semibold text-red-500">{product.priceProducts?.toLocaleString("vi-VN")}đ</span>
                            {/* Giá cũ của sản phẩm */}
                            <span className="mt-1 ml-1 text-sm font-semibold text-gray-500 line-through ">{product.Old_priceProducts?.toLocaleString("vi-VN")}đ</span>

                            {/* Mô tả sản phẩm */}
                            <div className="text-sm font-sans text-gray-600 mt-7 leading-7 line-clamp-4" dangerouslySetInnerHTML={{ __html: product?.descriptionProducts }} />
                        </div>

                    </div>



                </div>
            </div>
            <div className="mt-10 ml-24 flex">

                <div className="flex -mx-2 ">
                    {/* <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black ">
            <img className=" w-full object-cover cursor-pointer" src={product.images?.[0]?.base_url} alt="Thumbnail 1" />
        </div>
        <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black">
            <img className=" w-full  object-cover cursor-pointer" src={product.images?.[1]?.base_url} alt="Thumbnail 2" />
        </div> */}

                    {/* <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black">
            <img className=" w-full object-cover cursor-pointer" src={product.images?.[1]?.base_url} alt="Thumbnail 4" />
        </div> */}
                </div>
                <div className="grid grid-cols-2 w-96 m-auto">
                    <div className="">

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-14 rounded">
                            Mua ngay
                        </button>
                    </div>

                    {/* Nút thêm sản phẩm vào giỏ hàng */}
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Thêm vào giỏ hàng
                        </button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col mt-10 items-center justify-center  bg-gray-100 p-4">
                <h1 className="text-red-500 text-lg font-bold mb-4">ĐẶC ĐIỂM NỔI BẬT</h1>
                <div className="text-sm font-sans text-gray-600 mt-7 leading-7 " dangerouslySetInnerHTML={{ __html: product?.descriptionProducts }} />
            </div>
        </div >

    </>
}

export default Products_detail
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { DeleteProducts, getProducts } from "../../Api/products";
import { IProducts } from "../../interfaces/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Image } from "antd";
import { Login_user } from "../../Api/auth";
import { SigninForm } from "../../interfaces/auth";
import { getCategorys } from "../../Api/categorys";
import { ICategorys } from "../../interfaces/categorys";
import { useLocalStorage } from "../../hooks";
type Props = {
    data: IProducts
}
const ProductsAdmin = () => {
    // const [user] = useLocalStorage('user', null)
    const [product, setProducts] = useState<IProducts[]>([])
    const [categories, setCategories] = useState<ICategorys[]>([]);
    const fetchProduct = async () => {
        try {
            const { data } = await getProducts()
            // console.log(data.);
            setProducts(data)

        } catch (err) {
            console.log(err);

        }
    }
    const fetchCategory = async () => {
        try {
            const { data: { datas } } = await getCategorys();
            setCategories(datas);
        } catch (err) {
            console.log(err);
        }
    };
    const handlRomve = async (id: string | number) => {
        if (window.confirm("bạn có chắc là muốn xóa")) {

            DeleteProducts(id).then(() => {

                setProducts(product.filter((products) => products._id != id))

            }).catch((err) => {
                console.log(err);

            })
        }





    }


    // const getCategoryName = (categoryId: string) => {
    //     const category = categories.find((cat) => cat._id === categoryId);
    //     return category ? category.nameCategorys : "Unknown";
    // };



    useEffect(() => {

        fetchProduct()
        fetchCategory();

    }, [])


    return <>


        <div className="flex justify-around">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
            <Link to={"add-products"}>
                <i className="cursor-grab"><FontAwesomeIcon icon={faSquarePlus} beat size="3x" style={{ color: "#1b97b6", }} /></i>
            </Link>


        </div>

        <table className="table table-auto  my-5 w-full " >
            <thead>
                <tr className="text-center ">
                    <th id="th_id">ID</th>
                    <th >Name</th>
                    <th >Image</th>
                    <th >Price</th>
                    <th >Price gốc</th>
                    <th >Describe</th>
                    {/* <th >Category</th> */}
                    <th  >Action </th>
                </tr>
            </thead>
            <tbody>
                {product.map((products, index) => {


                    console.log(products?.categoryId?._id)

                    return (
                        <tr className="text-center border-b-[3px]">
                            <th >{index + 1}</th>
                            <td className="font-bold">{products?.nameProducts}</td>
                            <td className="w-36 m-auto" >
                                <Image
                                    src={products?.imagesProducts}
                                />
                            </td>



                            <td className="w-36">{products?.priceProducts.toLocaleString("vi-VN")}đ</td>
                            <td className="w-36">{products.Old_priceProducts.toLocaleString("vi-VN")}đ</td>
                            <td className="w-56 mt-7 leading-5 line-clamp-4">
                                {products.descriptionProducts}
                            </td>



                            <td>

                                <button onClick={() => handlRomve(products?._id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-blue-500 text-white hover:bg-blue-700 btn-remove border-0 p-2 rounded-md mx-1">
                                    Remove
                                </button>
                                <button data-name="${projects.name}" className="bg-green-500 hover:bg-green-600 text-white btn-update border-0 p-2  rounded-md mx-1">
                                    <Link to={"edit-products/" + products._id}> Update</Link>

                                </button>
                            </td>
                        </tr>
                    )
                })}




            </tbody>
        </table>
    </>
}

export default ProductsAdmin
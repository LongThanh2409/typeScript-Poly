import { useEffect, useState } from "react";
import { RemoveProjects, getProjects } from "../../api/projects";
import Container from "../Content";
import { Link, Outlet } from "react-router-dom"
const Products = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        getProjects().then(({ data }) => setdata(data))
    }, [])
    const handleRemove = (id, name) => {
        if (window.confirm(`Bạn có chắc muốn xóa dự án ${name}?`)) {
            RemoveProjects(id).then(() => {
                setdata(data.filter((projects) => projects.id != id));
            }).catch(error => console.log(error));
        }

    }

    return <>

        <Container></Container>
        <table class="min-w-max w-full table-auto" >
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">ID</th>
                    <th class="py-3 px-6 text-left">Name</th>
                    <th class="py-3 px-6 text-center">Price</th>
                    <th class="py-3 px-6 text-center">Description</th>
                    <th class="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) =>
                    <>

                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">

                                    </div>
                                    <span>{data.name}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">{data.price}</td>
                            <td class="py-3 px-6 text-center">{data.description}</td>
                            <td className="py-3 px-6 text-center">  <button onClick={() => handleRemove(data._id)} data-name={data.name} data-id={data.id} class="bg-danger "> Remove</button>
                                {/* <a href=""> <button data-name={data.name} class="bg-success btn-update border-0 p-2 text-lime-50 rounded-md "> Update</button></a> */}
                            </td>
                        </tr>
                    </>
                )}
            </tbody>
        </table >
    </>
}

export default Products
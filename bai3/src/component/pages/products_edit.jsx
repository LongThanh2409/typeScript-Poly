import { useState } from "react"
import Container from "../Content"
import { UpdateProjects } from "../../api/projects"



const Products_edit = () => {
    const [data, setdata] = useState([])
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const handleAdd = (event) => {
        event.preventDefault();
        const newProject = {
            name: name,
            price: price,
            description: description
        }
        UpdateProjects(newProject)
            .then(({ data }) => {
                setdata([...data, newProject]);
                setName("");
                setPrice("");
                setDescription("");
            }).then((alert("Sửa thành công"))).then(window.location.href = "/")
            .catch(error => console.log(error));
    }

    return <>
        <Container></Container>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                </label>
                <input class="name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-4">
                <label class=" block text-gray-700 font-bold mb-2" for="price">
                    Price
                </label>
                <input class="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="desc">
                    Description
                </label>
                <input class="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Enter price" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div class="flex items-center justify-between">
                <button onClick={handleAdd} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add
                </button>
            </div>
        </form>
    </>
}

export default Products_edit
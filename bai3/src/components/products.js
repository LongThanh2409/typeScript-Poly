import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";



const Products = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        getProjects().then(({ data }) => setdata(data))
    }, [])

    return `
    ${data.map((project, index) => {
        return `
    cccc:${project.name}
    `
    })}
  
  `
}

export default Products
import instance from "./config";
const getProjects = () => {
    return instance.get("/products")
}
const getProjectsid = (id) => {
    return instance.get("/products/" + id)
}
const RemoveProjects = (id) => {
    return instance.delete("/products/" + id)
}
const AddProjects = (products) => {
    return instance.post("/products", products)
}
const UpdateProjects = (id, products) => {
    return instance.put("/products/" + id, products)
}
export { getProjects, RemoveProjects, AddProjects, UpdateProjects, getProjectsid } 
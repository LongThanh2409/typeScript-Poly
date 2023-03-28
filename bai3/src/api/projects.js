import instance from "./config";
const getProjects = () => {
    return instance.get("/products")
}
export { getProjects }
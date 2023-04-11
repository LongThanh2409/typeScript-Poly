import { ICategorys } from "../interfaces/categorys";
import instance from "./config";
const getCategorys = () => {
    return instance.get("/category")
}

const getCategory = (id: string | number) => {
    return instance.get("/categorys/" + id)
}



const DeleteCategorys = (id: string | number) => {
    return instance.delete("/categorys/" + id)
}
export { DeleteCategorys, getCategorys, getCategory }


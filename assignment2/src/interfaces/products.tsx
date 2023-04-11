import * as Yup from "yup";
export interface IProducts {
    _id: string | number;
    nameProducts: string
    priceProducts: number
    Old_priceProducts: number
    descriptionProducts: string
    imagesProducts: string
    categoryId: {
        _id: string | number;
        name: string
    }

}

export interface ICategorys {


}



export const updateSchema = Yup.object({
    nameProducts: Yup.string().required("Trường dữ liệu bắt buộc"),
    priceProducts: Yup.number().required("Trường dữ liệu bắt buộc"),
    Old_priceProducts: Yup.number().required("Trường dữ liệu bắt buộc"),
    imagesProducts: Yup.string().required("Trường dữ liệu bắt buộc"),
    descriptionProducts: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),

})

export type updateForm = Yup.InferType<typeof updateSchema>

// Thêm
export const addSchema = Yup.object({
    nameProducts: Yup.string().required("Trường dữ liệu bắt buộc"),
    priceProducts: Yup.number().required("Trường dữ liệu bắt buộc"),
    Old_priceProducts: Yup.number().required("Trường dữ liệu bắt buộc"),
    imagesProducts: Yup.string().required("Trường dữ liệu bắt buộc"),
    descriptionProducts: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),


    // categoryId:
    //     Yup.object().shape({

    //         name: Yup.string().required("TRường dữ liệu bắt buộc"),

    //     }),


})

export type addForm = Yup.InferType<typeof addSchema>
interface Products {
    _id: string | number;
    nameProducts: string
    priceProducts: number
    Old_priceProducts: number
    descriptionProducts: string
    imageProducts: imageProducts[]

}
interface imageProducts {
    image0: string
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
}
export default Products
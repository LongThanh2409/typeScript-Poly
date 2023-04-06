export interface IProducts {
    _id: string | number;
    nameProducts: string
    priceProducts: number
    Old_priceProducts: number
    descriptionProducts: string
    imageProducts: imageProducts[]

}
export interface imageProducts {
    image0: string
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
}

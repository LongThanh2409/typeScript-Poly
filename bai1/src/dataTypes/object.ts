// Object declaration
// Object literal
const sinhvien: { name: string, age: number, homeTown?: string } = {
    name: "Nam Cuong",
    age: 20,
    // homeTown: "Van Con"
}

const sinhvien2: { name: string, age: number, homeTown?: string } = {
    name: "Thành",
    age: 20,
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}} = {

// }

// const book2: 

// interface Book {
//     authors: Author[]
//     book_cover?: string
//     categories: Categories
//     current_seller: Current_seller
//     description: string,
//     images: Images[]
//     list_price: number
//     name: string,
//     original_price: string,
//     quantity_sold: Quantity_sold
//     rating_average: number,
//     short_description: string,
//     specifications: Specifications[]
//     id: number
// }

// interface Author {
//     id: number,
//     name: string,
//     slug: string
// }
// interface Categories {
//     id: number,
//     name: string,
//     is_leaf: boolean
// }
// interface Current_seller {
//     id: number,
//     sku: string,
//     name: string,
//     link: string,
//     logo: string,
//     price: number,
//     product_id: string,
//     store_id: number,
//     is_best_store: boolean,
//     is_offline_installment_supported: boolean
// }
// interface Images {
//     base_url: string,
//     is_gallery: boolean,
//     label?: string,
//     large_url: string,
//     medium_url: string,
//     position?: string,
//     small_url: string,
//     thumbnail_url: string
// }
// interface Quantity_sold {
//     text: string,
//     value: number
// }
// interface Specifications {
//     name: string,
//     attributes: Attributes[]

// }
// interface Attributes {
//     code: string,
//     name: string,
//     value: string
// }


type Book = Author[] & Categories & {
    // authors: Author[]
    book_cover?: string
    // categories: Categories
    current_seller: Current_seller
    description: string,
    images: Images[]
    list_price: number
    name: string,
    original_price: string,
    quantity_sold: Quantity_sold
    rating_average: number,
    short_description: string,
    specifications: Specifications[]
    id: number
}

type Author = {
    id: number,
    name: string,
    slug: string
}
type Categories = {
    id: number,
    name: string,
    is_leaf: boolean
}
type Current_seller = {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported: boolean
}
type Images = {
    base_url: string,
    is_gallery: boolean,
    label?: string,
    large_url: string,
    medium_url: string,
    position?: string,
    small_url: string,
    thumbnail_url: string
}
type Quantity_sold = {
    text: string,
    value: number
}
type Specifications = Attributes[] & {
    name: string,
    // attributes: Attributes[]

}
type Attributes = {
    code: string,
    name: string,
    value: string
}


// type User = {
//     username: string,
//     password: string,
//     email: string,
//     login: () => void,
//     logout: () => void,
// }

// type Admin = User & {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
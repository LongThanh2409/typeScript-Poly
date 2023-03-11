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

interface Book {
    authors: Author[]
    book_cover: null
    categories: Categories
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

interface Author {
    id: number,
    name: string,
    slug: string
}
interface Categories {
    id: number,
    name: string,
    is_leaf: boolean
}
interface Current_seller {
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
interface Images {
    base_url: string,
    is_gallery: boolean,
    label: null,
    large_url: string,
    medium_url: string,
    position: null,
    small_url: string,
    thumbnail_url: string
}
interface Quantity_sold {
    text: string,
    value: number
}
interface Specifications {
    name: string,
    attributes: Attributes[]

}
interface Attributes {
    code: string,
    name: string,
    value: string
}


// {
//     "books": [
//         {
//             "authors": [
//                 {
//                     "id": 315,
//                     "name": "Jonathan Swift",
//                     "slug": "jonathan-swift"
//                 }
//             ],
//             "book_cover": null,
//             "categories": {
//                 "id": 9,
//                 "name": "Fiction - Literature",
//                 "is_leaf": false
//             },
//             "current_seller": {
//                 "id": 6337,
//                 "sku": "1951403961346",
//                 "name": "Foreignbooks",
//                 "link": "https://tiki.vn/cua-hang/foreignbooks",
//                 "logo": "https://vcdn.tikicdn.com/ts/seller/93/ba/f8/a08e6337f91ea64554cb27833f112e04.jpg",
//                 "price": 69000,
//                 "product_id": "3159381",
//                 "store_id": 6194,
//                 "is_best_store": false,
//                 "is_offline_installment_supported": null
//             },
//             "description": "<p style=\"text-align: justify;\"><span style=\"font-size: medium; color: #0000ff;\"><strong>Gulliver's Travels</strong></span></p>\n<p style=\"text-align: justify;\"><strong>Jonathan Swift's</strong> classic satirical narrative was first published in 1726, seven years after Defoe's Robinson Crusoe (one of its few rivals in fame and breadth of appeal). As a parody travel-memoir it reports on extraordinary lands and societies, whose names have entered the English language: notably the minute inhabitants of Lilliput, the giants of Brobdingnag, and the Yahoos in Houyhnhnmland, where talking horses are the dominant species. It spares no vested interest from its irreverent wit, and its attack on political and financial corruption, as well as abuses in science, continue to resonate in our own times.</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>",
//             "images": [
//                 {
//                     "base_url": "https://salt.tikicdn.com/media/catalog/product/g/u/gulliver_s_travels.jpg",
//                     "is_gallery": true,
//                     "label": null,
//                     "large_url": "https://salt.tikicdn.com/cache/w1200/media/catalog/product/g/u/gulliver_s_travels.jpg",
//                     "medium_url": "https://salt.tikicdn.com/cache/w300/media/catalog/product/g/u/gulliver_s_travels.jpg",
//                     "position": null,
//                     "small_url": "https://salt.tikicdn.com/cache/200x280/media/catalog/product/g/u/gulliver_s_travels.jpg",
//                     "thumbnail_url": "https://salt.tikicdn.com/cache/200x280/media/catalog/product/g/u/gulliver_s_travels.jpg"
//                 }
//             ],
//             "list_price": 120000,
//             "name": "Wordsworth Classics: Gulliver's Travels 1",
//             "original_price": "120000",
//             "quantity_sold": {
//                 "text": "Đã bán 5",
//                 "value": 5
//             },
//             "rating_average": 5,
//             "short_description": "Gulliver's Travels Jonathan Swift's classic satirical narrative was first published in 1726, seven years after Defoe's Robinson Crusoe (one of its few rivals in fame and breadth of appeal). As a paro...",
//             "specifications": [
//                 {
//                     "name": "Thông tin chung",
//                     "attributes": [
//                         {
//                             "code": "publisher_vn",
//                             "name": "Công ty phát hành",
//                             "value": "Wordsworth Editions Ltd"
//                         },
//                         {
//                             "code": "manufacturer",
//                             "name": "Nhà xuất bản",
//                             "value": "Wordsworth Editions Ltd"
//                         },
//                         {
//                             "code": "publication_date",
//                             "name": "Ngày xuất bản",
//                             "value": "2001-11-07 00:00:00"
//                         },
//                         {
//                             "code": "isbn13",
//                             "name": "ISBN-13",
//                             "value": "9781853260278"
//                         },
//                         {
//                             "code": "dimensions",
//                             "name": "Kích thước",
//                             "value": "12.5 x 19.5 cm"
//                         },
//                         {
//                             "code": "book_cover",
//                             "name": "Loại bìa",
//                             "value": "Paperback"
//                         },
//                         {
//                             "code": "number_of_page",
//                             "name": "Số trang",
//                             "value": "249"
//                         },
//                         {
//                             "code": "isbn",
//                             "name": "ISBN-10",
//                             "value": "1853260274"
//                         }
//                     ]
//                 }
//             ],
//             "id": 31
//         }
//     ]
// }
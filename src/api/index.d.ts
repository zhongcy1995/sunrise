interface Product {
    id: string,
    name: string,
    imageUrl: string,
    imageUrl2?: string,
    price: string,
    cutPrice: string,
    saleTag: boolean,
    group: string,
    border?:string
    date: string,
    images?: string[],
    desc?:string,
    detail?: Detail
}

interface Detail {
    spec:Entry[],
    material:string,
    warranty:string,
    supply:string
}

interface Entry {
    label:string,
    value:string
}

interface ProductGroup {
    id: string,
    name: string,
    products: Product[],
    desc: string,
    bg: string
}

interface Blog {
    title: string,
    image: string,
    date: string
    desc: string,
    file: string
}

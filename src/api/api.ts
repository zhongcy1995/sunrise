import {productGroups, products} from "@/api/products";


export const getProductsByIds = (ids:string[]): Product[] => {
    return  products.filter((product) => ids.includes(product.id))
}

export const getProductById = (id:string):Product => {
    return products.find((product) => product.id === id)
}

export const getProductsByGroup = (id:string): ProductGroup => {
    return  productGroups.filter((product) => product.id === id)[0]
}

export const getProductGroups = ():ProductGroup[] => {
    return productGroups
}

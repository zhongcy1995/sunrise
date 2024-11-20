interface Condition {
    sale: boolean ,
    unSale: boolean ,
    priceStart: number,
    priceEnd: number
}
interface Tag {
    label: string,
    key: string,
    index: number
}

interface SortStrategy {
    key: string,
    sort: (products:Product[]) => void
}

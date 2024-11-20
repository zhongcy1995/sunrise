import { defineStore } from 'pinia'


export const useFilterOptionsStore = defineStore('filterOptions', {
    // 其他配置...
    state: () => (
        {
            sale:false,
            unSale:false,
            priceStart:null,
            priceEnd:null
        }
    ),
})


export const useSortStrategyStore = defineStore('sortStrategy', {
    // 其他配置...
    state: () => (
        {
            key:'Featured',
            sort: (products:Product[]) => {

            }
        }
    ),
})



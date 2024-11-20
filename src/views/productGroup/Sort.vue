<template>
  <div class="container">
    <n-grid cols="2" >
      <n-grid-item span="1" >
        <n-grid cols="6">
          <n-grid-item style="display: flex;justify-content: center;align-items: center" span="1">
            Filter:
          </n-grid-item>
          <n-grid-item span="2">
            <sale-tag-filter ref="saleTagFilter"  @handleFilter="sort"></sale-tag-filter>
          </n-grid-item>
          <n-grid-item span="2">
            <price-filter ref="priceFilter" @handleFilter="sort"></price-filter>
          </n-grid-item>
        </n-grid>
      </n-grid-item>
      <n-grid-item span="1">
        <n-grid cols="7">
          <n-grid-item style="display: flex;justify-content: center;align-items: center" span="2">
            Sort by:
          </n-grid-item>
          <n-grid-item span="3">
            <n-select  v-model:value="sortValue" :options="sortOptions" :on-update:value="selectStrategy" :consistent-menu-width="false">
            </n-select>
          </n-grid-item>
          <n-grid-item style="display: flex;justify-content: center;align-items: center" span="2">
            {{ products.length < totalCount? products.length + ' of ' + totalCount : totalCount }} products
          </n-grid-item>
        </n-grid>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUpdated, ref} from "vue";
import {getProductsByGroup} from "@/api/api";
import {useRoute} from "vue-router";
import SaleTagFilter from "@/views/productGroup/SaleTagFilter.vue";
import PriceFilter from "@/views/productGroup/PriceFilter.vue";
import EventBus from '@/assets/common/event-bus'
import {useFilterOptionsStore, useSortStrategyStore} from '@/store/localStore'
import {storeToRefs} from "pinia";



const sortOptions = ref([])
const saleTagFilter = ref(null)
const priceFilter = ref(null)
const sortValue = ref('Featured')
const products = ref<Product[]>([])
const route = useRoute()
const filterStore = useFilterOptionsStore()
const sortStore = useSortStrategyStore()
const totalCount = ref(0)




onMounted(  ()=>{
  let groupId = route.query.id as string
  products.value = getProductsByGroup(groupId).products
  totalCount.value = products.value.length
  saleTagFilter.value.initFilterOptions(products.value,condition.value)
  priceFilter.value.initFilterOptions(products.value,condition.value)
  initSortOptions()
})


const strategies:SortStrategy[] = [
  {
    key:'Featured',
    sort: (products:Product[]) => {

    }
  },
  {
    key:'Alphabetically, A-Z',
    sort: (products:Product[]) => {
      products.sort((a,b)=>a.name.localeCompare(b.name))
    }
  },
  {
    key:'Alphabetically, Z-A',
    sort: (products:Product[]) => {
      products.sort((a,b)=>b.name.localeCompare(a.name))
    }
  },
  {
    key:'Price, low to high',
    sort: (products:Product[]) => {
      products.sort((a,b)=> {
        let p1 = a.price.substring(1).replace(',','')
        let p2 = b.price.substring(1).replace(',','')
        return Number(p1) - Number(p2)
      })
    }
  },
  {
    key:'Price, high to low',
    sort: (products:Product[]) => {
      products.sort((a,b)=> {
        let p1 = a.price.substring(1).replace(',','')
        let p2 = b.price.substring(1).replace(',','')
        return Number(p2)-Number(p1)
      })
    }
  },
  {
    key:'Date, old to new',
    sort: (products:Product[]) => {
      products.sort((a,b)=>a.date.localeCompare(b.date))
    }
  },
  {
    key:'Date, new to old',
    sort: (products:Product[]) => {
      products.sort((a,b)=>b.date.localeCompare(a.date))
    }
  }
]

const initSortOptions = () => {
  strategies.forEach((strategy) => {
    sortOptions.value.push({
      label: strategy.key,
      value: strategy.key,
    })
  })
}

const {sale,unSale,priceStart,priceEnd} = storeToRefs(filterStore)
const initCondition:Condition = {
  sale:sale.value,
  unSale:unSale.value,
  priceStart:priceStart.value,
  priceEnd:priceEnd.value
}


const condition = ref<Condition>(initCondition)

EventBus.on('addFilter', (val:Condition)=>{
  sort(val)
})

EventBus.on('handleFilter', (val:Condition)=>{
  sort(val)
})

EventBus.on('getProductCount_ProductList',(val:Product[])=>{
  products.value = val
})

EventBus.on('clear_filterTag',(val)=>{
  selectStrategy(strategies[0].key)
})

// 选择排序策略
const selectStrategy = (value) => {
  sortStore.$state = strategies.find(strategy=> strategy.key === value)
  sortValue.value = sortStore.key
  sort(condition.value)
}

const emits = defineEmits(['product-sort'])
const sort = (c) => {
  condition.value = c
  filterStore.$state = {...c}
  emits('product-sort',condition.value,sortStore.$state)
}

</script>

<style scoped>
.container {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 15px;
  padding-top: 2rem;
}

</style>

<template>
  <div class="container">
    <div>
      <n-button text @click="activeOptions">
        <template #icon>
          <n-icon>
            <Options />
          </n-icon>
        </template>
        Filter and sort
      </n-button>
    </div>
    <n-drawer v-model:show="active"
              style="width: 80%"
              :placement="placement"
              :trap-focus="false"
              :block-scroll="true"
              :on-after-leave = "sortUnShow"
    >
      <n-drawer-content closable>
        <template #header>
          <div class="drop-down-head">
            <div style="margin-bottom: 1rem">Filter and sort</div>
            <div style="font-size: small">
              {{filterCount + products.length + ' products'}}
            </div>
          </div>
        </template>
        <div>
          <n-grid cols="6"  style="margin-top: 3rem">
            <n-grid-item span="5">
              <div>Availability</div>
            </n-grid-item>
            <n-grid-item span="1">
              <div>
                <n-icon size="20" @click="activeAvailability = true">
                  <ArrowForward />
                </n-icon>
              </div>
            </n-grid-item>
          </n-grid >
          <n-grid cols="6" style="margin-top: 3rem">
            <n-grid-item span="5">
              <div>Price</div>
            </n-grid-item>
            <n-grid-item span="1">
              <div>
                <n-icon size="20" @click="activePrice = true">
                  <ArrowForward />
                </n-icon>
              </div>
            </n-grid-item>
          </n-grid>
          <n-grid cols="6" style="margin-top: 3rem">
            <n-grid-item span="2">
              <div>Sort by</div>
            </n-grid-item>
            <n-grid-item span="4">
              <div>
                <n-select  v-model:value="sortValue" :options="sortOptions" :on-update:value="selectStrategy" :consistent-menu-width="false">
                </n-select>
              </div>
            </n-grid-item>
          </n-grid>
        </div>
        <template #footer>
          <n-grid style="margin-left: 1rem" cols="2">
            <n-grid-item span="1" >
              <n-button round info size="large" @click="clickClear">
                Remove all
              </n-button>
            </n-grid-item>
            <n-grid-item  span="1" >
              <n-button round  size="large" @click="apply">
                Apply
              </n-button>
            </n-grid-item>
          </n-grid>
        </template>
      </n-drawer-content >

      <!-- Availability -->
      <n-drawer v-model:show="activeAvailability"  style="margin-top: 5rem;width: 80%" :show-mask="false">
        <n-drawer-content >
          <n-grid cols="6"  >
            <n-grid-item span="1">
              <div>
                <n-icon size="20" @click="activeAvailability = false">
                  <ArrowBack />
                </n-icon>
              </div>
            </n-grid-item>
            <n-grid-item span="5">
              <div>Availability</div>
              <n-flex vertical>
                <n-checkbox :disabled="saleCount === 0" style="vertical-align: -0.15rem;margin-top: 1rem" :checked="saleCheck" :on-update:checked="onUpdateCheckOfSale">
                  {{'In stock(' + saleCount +')'}}
                </n-checkbox>
                <n-checkbox :disabled="unSaleCount === 0" style="vertical-align: -0.15rem;margin-top: 1rem" :checked="unSaleCheck" :on-update:checked="onUpdateCheckOfUnSale">
                  {{'Out of stock(' + unSaleCount +')'}}
                </n-checkbox>
              </n-flex>
            </n-grid-item>
          </n-grid >
          <template #footer>
            <n-grid style="margin-left: 1rem" cols="2">
              <n-grid-item span="1" >
                <n-button round info size="large" @click="clickClearSaleTag">
                  Clear
                </n-button>
              </n-grid-item>
              <n-grid-item  span="1" >

              </n-grid-item>
            </n-grid>
          </template>
        </n-drawer-content>
      </n-drawer>

      <!-- Price -->
      <n-drawer v-model:show="activePrice"  style="margin-top: 5rem;width: 80%" :show-mask="false">
        <n-drawer-content >
          <n-grid cols="6"  >
            <n-grid-item span="1">
              <div>
                <n-icon size="20" @click="activePrice = false">
                  <ArrowBack />
                </n-icon>
              </div>
            </n-grid-item>
            <n-grid-item span="5">
              <div>Price</div>
            </n-grid-item>
          </n-grid >
          <div class="desc-max-price">The highest price is {{maxPriceStr}}</div>
          <div class="price-range">
            <n-grid cols="2" >
              <n-grid-item span="1">
                <n-input-number min="0" :precision="2" :max="maxPrice" v-model:value="priceStart"  :on-blur="inputPrice" round style="width: 7rem" placeholder="From" :input-props="style">
                  <template #prefix>
                    $
                  </template>
                </n-input-number>
              </n-grid-item>
              <n-grid-item span="1">
                <n-input-number min="0" :precision="2" :max="maxPrice" v-model:value="priceEnd"   :on-blur="inputPrice" round style="width: 7rem" placeholder="To" :input-props="style">
                  <template #prefix>
                    $
                  </template>
                </n-input-number>
              </n-grid-item>
            </n-grid>
          </div>
          <template #footer>
            <n-grid style="margin-left: 1rem" cols="2">
              <n-grid-item span="1" >
                <n-button round info size="large" @click="clickClearPrice">
                  Clear
                </n-button>
              </n-grid-item>
              <n-grid-item  span="1" >

              </n-grid-item>
            </n-grid>
          </template>
        </n-drawer-content>
      </n-drawer>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, onMounted, ref} from "vue";
import {DrawerPlacement} from "naive-ui";
import {Options,ArrowForward,ArrowBack} from '@vicons/ionicons5'
import {getProductsByGroup} from "@/api/api";
import EventBus from '@/assets/common/event-bus'
import {useFilterOptionsStore, useSortStrategyStore} from '@/store/localStore'
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";

const active = ref(false)
const activeAvailability = ref(false)
const activePrice = ref(false)
const placement = ref<DrawerPlacement>('right')



const route = useRoute()
const filterStore = useFilterOptionsStore()
const sortStore = useSortStrategyStore()
const products = ref<Product[]>([])
const filterCount = ref('')

onMounted(  ()=>{
  let groupId = route.query.id as string
  products.value = getProductsByGroup(groupId).products
  getSaleCount()
  getUnSaleCount()
  initPrice()
  getMaxPrice(products.value)
  initSortOptions()
})

const initPrice = () => {
  priceStart.value = null
  priceEnd.value = null
}


const activeOptions = () => {
  active.value = true
}

// 添加标签
const addTag = (tag:Tag) => {
  EventBus.emit('addTag',tag)
}

const {sale,unSale,priceStart,priceEnd} = storeToRefs(filterStore)
const initCondition:Condition = {
  sale:sale.value,
  unSale:unSale.value,
  priceStart:priceStart.value,
  priceEnd:priceEnd.value
}


const condition = ref<Condition>(initCondition)
// Availability
const emit = defineEmits(['product-sort']);
const selectedCount = ref(0)
const saleCheck = ref(false)
const unSaleCheck = ref(false)


const onUpdateCheckOfSale = (value) => {
  saleCheck.value = value
}


const applyForCheckOfSale = (value) => {
  // 过滤未上架的
  if (value) {
    condition.value.unSale = true
    selectedCount.value++
    addTag({
      label:'In stock',
      key:'Availability',
      index:1
    })
  }else {
    condition.value.unSale = false
    selectedCount.value--
    EventBus.emit('closeTagFromFilter',{
      label:'In stock',
      key:'Availability',
      index:1
    })
  }
}


const onUpdateCheckOfUnSale = (value) => {
  unSaleCheck.value = value
}

const applyForCheckOfUnSale = (value) => {
  // 过滤未上架的
  if (value) {
    condition.value.sale = true
    selectedCount.value++
    addTag({
      label:'Out of stock',
      key:'Availability',
      index:1
    })
  }else {
    condition.value.sale = false
    selectedCount.value--
    EventBus.emit('closeTagFromFilter',{
      label:'Out of stock',
      key:'Availability',
      index:1
    })
  }

}



const saleCount = ref(0)
const getSaleCount = () => {
  products.value.forEach(product => {
    if (product.saleTag){
      saleCount.value++
    }
  })
}

const unSaleCount = ref(0)
const getUnSaleCount = () => {
  products.value.forEach(product => {
    if (!product.saleTag){
      unSaleCount.value++
    }
  })
}




// price
const maxPrice = ref(0)
const maxPriceStr = ref<String>('')
const getMaxPrice = (products:Product[]) =>{
  products.forEach(p=>{
    let price = Number(p.price.substring(1).replace(',',''))
    if (price > maxPrice.value){
      maxPrice.value= price
      maxPriceStr.value =  p.price
    }
  })
}
const style = ref({
  style: {
    height: '50px'
  }
})


const priceFrom = ref('$0.00')
const priceTo = ref('')
const inputPrice = () => {
  if (priceStart.value) {
    priceFrom.value = '$' + priceStart.value.toLocaleString('en-US',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    condition.value.priceStart = priceStart.value
  }
  if (priceEnd.value){
    priceTo.value = '$' + priceEnd.value.toLocaleString('en-US',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    condition.value.priceEnd = priceEnd.value
  }
}

const applyForSalePrice = () => {
  if (priceStart.value === null && priceEnd.value === null){
    return
  }
  addTag({
    label: priceFrom.value + '-' + (priceTo.value === '' ? maxPriceStr.value : priceTo.value),
    key:'Price',
    index:1
  })
  EventBus.emit('addFilter',condition.value)
}


EventBus.on('clear_filterTag',(val)=>{
  clear()
  selectStrategy(strategies[0].key)
})

const clickClearSaleTag = () => {
  resetSaleTag()
  EventBus.emit('closeTagFromSaleFilter',{
    label:'',
    key:'Availability',
    index:1
  })
  sort()
}
const clickClearPrice= () => {
  resetPrice()
  EventBus.emit('closeTagFromPriceFilter',{
    label:'',
    key:'Price',
    index:2
  })
  sort()
}
const clickClear= () => {
  EventBus.emit('clear_SortDropDown')
}

const sortUnShow = () =>{
  if (!applied.value) {
    clear()
  }
}

const clear = () => {
  resetPrice()
  resetSaleTag()
  resetSortOptions()
  sort()
}


// 排序策略
const sortOptions = ref([])
const sortValue = ref('Featured')
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


const selectStrategy = (value) => {
  sortStore.$state = strategies.find(strategy=> strategy.key === value)
  sortValue.value = sortStore.key
}


const applied = ref(false)
const apply = () => {
  applied.value = true
  applyForCheckOfSale(saleCheck.value)
  applyForCheckOfUnSale(unSaleCheck.value)
  applyForSalePrice()
  sort()
  active.value = false
}

const sort = () => {
  filterStore.$state = {...condition.value}
  emit('product-sort',condition.value,sortStore.$state)
}

const resetPrice = () => {
  condition.value.priceEnd = null
  condition.value.priceStart = null
  priceEnd.value = null
  priceStart.value = null
}

const resetSaleTag = () => {
  condition.value.sale = false
  condition.value.unSale = false
  selectedCount.value = 0
  saleCheck.value = false
  unSaleCheck.value = false
}

const resetSortOptions = () =>{
  sortValue.value = strategies[0].key
}

</script>

<style scoped>
.container {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 15px;
  padding-top: 2rem;
}
.drop-down-head {
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.desc-max-price {
  margin-top: 2rem;
}
.price-range {
  margin-top: 2rem;
}
</style>

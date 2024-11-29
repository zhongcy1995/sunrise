<template>
  <NavMenu ></NavMenu>
  <div class="container" id="drawer-target">
    <div style="margin-bottom: 1rem">
      <search-product></search-product>
    </div>
    <div class="div-sort">
      <n-grid cols="10" item-responsive>
        <n-grid-item span="0 720:6">
        </n-grid-item>
        <n-grid-item style="display: flex;justify-content: center;align-items: center" span="0 720:1">
          Sort by:
        </n-grid-item>
        <n-grid-item span="0 720:2">
          <n-select  v-model:value="sortValue" :options="sortOptions" :on-update:value="selectStrategy" :consistent-menu-width="false">
          </n-select>
        </n-grid-item>
        <n-grid-item style="display: flex;justify-content: center;align-items: center" span="2 720:0">
          <n-button text @click="activeOptions">
            <template #icon>
              <n-icon>
                <Options />
              </n-icon>
            </template>
            Sort
          </n-button>
        </n-grid-item>
        <n-grid-item  span="6 720:0">

        </n-grid-item>
        <n-grid-item style="display: flex;justify-content: center;align-items: center" span="2 720:1">
          {{ cardList.length + ' results'}}
        </n-grid-item>
      </n-grid>
    </div>
    <div class="product-list-container">
      <n-grid  cols="4" item-responsive>
        <n-grid-item v-for="(item,index) in cardList"  span="2 720:1" :key="index">
          <product-card :card="item"></product-card>
        </n-grid-item>
      </n-grid>
    </div>
    <foot></foot>
  </div>
  <n-drawer v-model:show="active"
            style="width: 80%"
            :placement="'right'"
            :trap-focus="false"
            :block-scroll="true"
  >
    <n-drawer-content closable>
      <template #header>
        <div class="drop-down-head">
          <div style="margin-bottom: 1rem">Sort</div>
          <div style="font-size: small">
            {{ cardList.length + ' results'}}
          </div>
        </div>
      </template>
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
    </n-drawer-content>
  </n-drawer>

</template>

<script lang="ts" setup>
import SearchProduct from "@/views/searchResult/Search.vue";
import NavMenu from "@/components/NavMenu.vue";
import Foot from "@/views/searchResult/Foot.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getProductBySearchVal} from "@/api/api";
import ProductCard from "@/views/home/ProductCard.vue";
import {Options} from '@vicons/ionicons5'
const route = useRoute()


const cardList = ref<Product[]>([])
onMounted(() => {
  let searchVal = route.query.search as string
  cardList.value = getProductBySearchVal(searchVal)
  cardList.value.forEach((card) => {
    card.border = '1px solid #0e1b4d'
  })
  initSortOptions()
})



const strategies:SortStrategy[] = [
  {
    key:'Relevance',
    sort: (products:Product[]) => {

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
  }
]

const sortValue = ref('Relevance')
const sortOptions = ref([])


const initSortOptions = () => {
  strategies.forEach((strategy) => {
    sortOptions.value.push({
      label: strategy.key,
      value: strategy.key,
    })
  })
}

const sort = ref<SortStrategy>({
  key:'Relevance',
  sort: (products:Product[]) => {

  }
})
// 选择排序策略
const selectStrategy = (value) => {
  sort.value = strategies.find(strategy=> strategy.key === value)
  sortValue.value = sort.value.key
  sort.value.sort(cardList.value)
}


const active = ref(false)
const activeOptions = () => {
  active.value = true
}

</script>

<style scoped>
.container {
  position: relative;
  background-color: #eff0f5;
  padding-top: 1rem;
}
.product-list-container {
  width: 100%;
}
.div-sort {
  margin-top: 1rem;
}
::v-deep( .n-base-selection-input__content){
  background-color: #eff0f5;
}
::v-deep(.n-base-selection-label){
  background-color: #eff0f5;
  border: none;
}

::v-deep(.n-base-selection__border){
  border: none;
}

::v-deep(.n-base-selection .n-base-suffix .n-base-suffix__arrow){
  color: #0e1b4d;
}
.drop-down-head {
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

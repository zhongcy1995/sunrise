<template >
  <div class="product-list-container">
    <product-sort v-if="windowWidth >=720" @product-sort="sort" ></product-sort>
    <product-sort-drop-down ref="dropDown" v-if="windowWidth <720" @product-sort="sort"></product-sort-drop-down>
    <filter-tag></filter-tag>
    <n-grid  :cols="4" item-responsive>
      <n-grid-item v-for="(item,index) in cardList"  span="0 720:1" :key="index">
        <product-card :card="item"></product-card>
      </n-grid-item>
      <n-grid-item v-for="(item,index) in cardList"    span="2 720:0" >
        <div >
          <product-card :card="item"></product-card>
        </div>
      </n-grid-item>
    </n-grid>
    <div class="empty-card-list" v-if="cardList.length === 0">
      <div>No products found</div>
      <div style="position: relative;display: flex;flex-direction: row;">
        <div>Use fewer filters or &nbsp</div>
        <div style="text-decoration: underline;cursor: pointer;" @click="removeAll">remove all</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "@/views/home/ProductCard.vue";
import EventBus from '@/assets/common/event-bus'
import {ref,onMounted} from "vue";
import {getProductsByGroup} from "@/api/api";
import {useRoute} from "vue-router";
import ProductSort from "@/views/productGroup/Sort.vue";
import ProductSortDropDown from "@/views/productGroup/SortDropDown.vue";
import FilterTag from "@/views/productGroup/FilterTag.vue";

const route = useRoute()

const cardList = ref<Product[]>([])
const groupId= ref('')

// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)

// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted(()=>{
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
  groupId.value = route.query.id as string
  cardList.value = getProductsByGroup(groupId.value).products
  cardList.value.forEach((card) => {
    card.border = '1px solid #0e1b4d'
  })
})

const removeAll = () => {
  EventBus.emit('clear_ProductList')
}

const sort = (condition:Condition,strategy:SortStrategy) => {
  cardList.value = getProductsByGroup(groupId.value).products.filter(p=>{
    if (condition.sale){
      return !p.saleTag
    }
    return true
  }).filter(p=> {
    if (condition.unSale){
      return p.saleTag
    }
    return true
  }).filter(p=> {
    let price = p.price.substring(1).replace(',','')
    if (condition.priceStart === null && condition.priceEnd === null){
      return true
    }
    if (condition.priceStart === null && condition.priceEnd !== null){
      return Number(price) <condition.priceEnd
    }
    if (condition.priceStart !== null && condition.priceEnd === null){
      return Number(price) >= condition.priceStart
    }
    return Number(price) >= condition.priceStart && Number(price) <condition.priceEnd
  })
  strategy.sort(cardList.value)
  EventBus.emit('getProductCount_ProductList',cardList.value)
}

</script>

<style scoped>
.product-list-container {
  width: 100%;
  background-color: #eff0f5;
}
.empty-card-list {
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>

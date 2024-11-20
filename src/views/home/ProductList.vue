<template>
  <div class="product-list-container">
    <div class="product-list-container-head">
      <div class="product-list-container-head-d">
        Featured Products
      </div>
    </div>
    <n-grid  :cols="4" item-responsive>
      <n-grid-item v-for="(item,index) in cardList" class="menu-item" span="0 720:1" :key="index">
        <product-card :card="item"></product-card>
      </n-grid-item>
      <n-grid-item  class="menu-item"  span="4 720:0" >
        <n-carousel :slides-per-view="2"  :loop="false" draggable>
          <div v-for="(item,index) in cardList" :key="index">
            <product-card :card="item"></product-card>
          </div>
        </n-carousel>
      </n-grid-item>
    </n-grid>
    <div class="product-list-container-foot">
      <n-button
          class="product-list-container-foot-d"
          strong  round color="#ffffff" text-color="#000000" @click="goToViewAll">
        View all
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "@/views/home/ProductCard.vue";
import {ref} from "vue";
import {getProductsByGroup, getProductsByIds} from "@/api/api";
import {useRouter} from "vue-router";


const router = useRouter()

const cardList = ref(getProductsByGroup('g1').products)
const goToViewAll = () => {
  router.replace({
    name:'ProductGroup',
    query: {
      id: 'g1'
    }
  })
}
</script>

<style scoped>
.product-list-container {
  margin-top: 1rem;
  width: 100%;
  background-color: #0e1b4d;
}
.product-list-container-head{
  display: flex;
  align-items: center;
  justify-content: left;
}
.product-list-container-head-d{
  font-weight: bolder;
  font-size: 40px;
  margin-top: 1rem;
  margin-left: 1.2rem;
  color: #ffffff;
}
.product-list-container-foot{
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-list-container-foot-d{
  margin-bottom: 1rem;
  width: 8rem;
  height: 3rem;
  font-size: medium;
}
</style>

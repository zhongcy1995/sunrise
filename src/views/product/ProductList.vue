<template >
  <div class="product-list-container">
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
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "@/views/home/ProductCard.vue";
import {ref,onMounted} from "vue";
import {getProductsByGroup} from "@/api/api";
import {useRoute} from "vue-router";


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
  cardList.value = getProductsByGroup('g1').products
  cardList.value.forEach((card) => {
    card.border = '1px solid #0e1b4d'
  })
})



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

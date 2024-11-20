<template>
  <div class="container">
    <div class="div-container">
      <div class="div-h2">
        SUNRISE ENVIRONMENTAL PROTECTION SOLUTION
      </div>
    </div>
    <div class="div-container">
      <div class="div-h1">
        You don't need a reliable vendor, until you do.
      </div>
    </div>
    <div v-if="windowWidth >=900" style="display: flex;justify-content: center;align-items: center">
      <div style="width: 18rem;margin: 2rem;height: 20rem" v-for="(item,index) in items" :key="index">
        <img  class="image-container" :src="item" >
      </div>
    </div>
    <div v-if="windowWidth <900" class="div-container">
      <n-flex vertical>
        <div class="inner-container">
          <img class="image-container-flex" v-for="(item,index) in items" :src="item" :key="index">
        </div>
      </n-flex>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ISO from "@/static/images/home/ISO.webp"
import CE from "@/static/images/home/CE.webp"
import CR from "@/static/images/home/CR.webp"
import {onMounted, ref} from "vue";

const items = [CE,ISO,CR]


// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命周期
onMounted(() => {
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
})
// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}
</script>

<style scoped>
.container {
  background-color: #0e1b4d;
}
.div-h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
  margin-top: 1rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  color: #ffffff;
}

.div-container {
  flex-direction: column;
  display: flex;
  background-color: #0e1b4d;
  justify-content: center;
  align-items: center;
}



.div-h2 {
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
  color: #5d6688
}

.image-container {
  width: 100%;
  height: 100%;
  background-color: #4770db;
  object-fit: fill;

}
.inner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.image-container-flex {
  margin: 1rem;
  width: 80%;
  height: 80%;
  object-fit: cover;
}
</style>

<template>
  <div v-if="windowWidth >= 720" class="desc-div-1-container">
    <div  class="desc-div-1">
      <n-grid cols="2" >
        <n-grid-item  span="1">
          <div class="desc-div-1-image-container">
            <img class="desc-div-1-image" :src="desc2"/>
          </div>
        </n-grid-item>
        <n-grid-item span="1">
          <div class="desc-div-1-text">
            <div style="font-weight: bolder;font-size: 3rem;color: #0e1b4d;">
              Portable Shower
            </div>
            <div style="color: #5d6688;margin-right: 5rem">
              The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities.
            </div>
            <n-button
                class="desc-div-button"
                strong  round color="#4770db" text-color="#ffffff" >
              Learn more
            </n-button>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
  <div v-if="windowWidth < 720" class="desc-div-2-container">
    <div v-if="windowWidth < 720" class="desc-div-2">
      <div class="desc-div-2-image-container">
        <img class="desc-div-2-image" :src="desc2"/>
      </div>
      <div class="desc-div-2-text-container">
        <div class="desc-div-1-text">
          <div style="font-weight: bolder;font-size: 2.5rem;color:#0e1b4d;">
            Portable Shower
          </div>
          <div style="color: #5d6688">
            The Portable Shower is an ideal solution for when you have access to water mains, but no permanent showering facilities.
          </div>
          <n-button
              class="desc-div-button"
              strong  round color="#4770db" text-color="#ffffff" >
            Learn more
          </n-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted,ref} from "vue";
import desc2 from "@/static/images/home/desc2.webp"


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
.desc-div-1-container {
  padding: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
}
.desc-div-1 {
  border-radius: 1rem;
  width: 70rem;
}
.desc-div-1-text {
  padding: 2rem 4rem 2rem 2rem;
}
.desc-div-button {
  margin-top: 2rem;
  width: 8rem;
  height: 3rem;
  font-size: medium;
}
.desc-div-1-image-container {
  border-radius:0  1rem 1rem 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.desc-div-1-image{
  border-radius:0  1rem 1rem 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}


.desc-div-2-container {
  padding: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.desc-div-2 {
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 1rem;
  width: 70rem;
}

.desc-div-2-image-container {
  height: 45%;
  width: 100%;
}

.desc-div-2-text-container {
  height: 55%;
  width: 100%;
}

.desc-div-2-image{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>

<template>
  <div >
    <div class="div-text">Become the next partner with Sunrise</div>
    <n-grid  cols="3" item-responsive>
      <n-grid-item class="container" v-for="(item,index) in items"  span="0 900:1" :key="index">
        <div class="inner-container">
          <img class="image-container" :src="item.image"/>
          <div class="image-text">{{ item.text }}</div>
        </div>
      </n-grid-item>
    </n-grid>
    <n-grid cols="1" item-responsive>
      <n-grid-item  span="1 900:0">
        <n-flex vertical>
          <div class="inner-container" v-for="(item,index) in items" :key="index">
            <img  class="image-container-flex" :src="item.image" />
            <div class="image-text">{{ item.text }}</div>
          </div>
        </n-flex>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import desc4_1 from "@/static/images/home/desc4-1.webp"
import desc4_2 from "@/static/images/home/desc4-2.webp"
import desc4_3 from "@/static/images/home/desc4-3.webp"
const items = [
  {
    text:'with Austrialian Portable Toilet',
    image:desc4_1
  },
  {
    text:'with Airam Developments, the US',
    image:desc4_2
  },
  {
    text:'with 1300 Temp Fence, Australia',
    image:desc4_3
  }
]
</script>

<style scoped>
.container {
  margin: 1rem 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container {
  border-radius: 1rem 1rem 0 0;
  height: 18rem;
  width: 18rem;
  object-fit: cover;
}
.image-container-flex {
  border-radius: 1rem 1rem 0 0;
  width: 80%;
  height: 80%;
  object-fit: cover;
}
.div-text {
  margin-left: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #0e1b4d;
  font-size: 2rem;
  font-weight: bold;
}
.image-text {
  margin-left: 10%;
  margin-top: 2rem;
  margin-bottom: 5rem;
  color: #0e1b4d;
  font-size: 1.5rem;
  font-weight: bold;
  height: 20px;
}
.inner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
</style>

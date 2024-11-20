<template>
  <n-carousel show-arrow :autoplay="isAuto">
    <div class="parent">
      <img
          class="carousel-img"
          :src="c1"
      >
      <div class="carousel-content-1">
        <div class="carousel-1">
          <n-flex vertical>
            <div style="font-weight: bolder;font-size: 30px;color: white">The Basic Model</div>
            <div style="color: lightgray">PT-370</div>
            <n-button style="width: 120px" ghost  round color="#ffffff" size="large">
              Learn More
            </n-button>
          </n-flex>
        </div>
      </div>
    </div>
    <div class="parent">
      <img
          class="carousel-img"
          :src="c2"
      >
      <div class="carousel-content-2">
        <div class="carousel-2">
          <n-flex vertical>
            <div style="font-weight: bolder;font-size: 55px;color: white">Strong Supply</div>
            <div style="font-weight: bolder;font-size: 55px;color: white">Ability</div>
            <div style="color: lightgray">Up to 1000 units per month</div>
            <n-button style="width: 120px" ghost  round color="#ffffff" size="large">
              Contact us
            </n-button>
          </n-flex>
        </div>
      </div>
    </div>
    <div class="parent">
      <img
          class="carousel-img"
          :src="c3"
      >
      <div class="carousel-content-3">
        <div class="carousel-3">
          <n-flex vertical>
            <div style="font-weight: bolder;font-size: 30px;color: white">
              Real factory, branding options
            </div>
            <div style="color: lightgray">
              With more than 16-year experience
            </div>
            <n-button style="width: 120px" ghost  round  color="#ffffff" size="large">
              Contact us
            </n-button>
          </n-flex>
        </div>
      </div>
    </div>
    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button v-if="!isAuto" type="button" class="custom-arrow--right" @click="isAuto = true">
          <n-icon><CaretForward /></n-icon>
        </button>
        <button v-if="isAuto" type="button" class="custom-arrow--right" @click="isAuto = false">
          <n-icon><Stop /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>

<script lang="ts" setup>
import { ArrowBack, ArrowForward,CaretForward,Stop } from '@vicons/ionicons5'
import {defineComponent, ref} from 'vue'

// images
import c1 from "@/static/images/home/c1.png"
import c2 from "@/static/images/home/c2.jpg"
import c3 from "@/static/images/home/c3.jpg"

const isAuto = ref(true)
</script>

<style scoped>

.carousel-img {
  width: 100%;
  height: 35rem;
  object-fit: cover;
  position: relative;
  z-index: 1;
}


.parent {
  height: 35rem;
  position: relative;
}


.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition:
      width 0.3s,
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}


.carousel-content-1 {
  position: relative;
  z-index: 2;
  top: -120%;
  height: 120%;
  background-color: rgba(80, 80, 80, 0.5);
}
.carousel-1 {
  margin-right: 20%;
  margin-left: 10%;
  padding-top: 20rem;
}

.carousel-content-2 {
  position: relative;
  z-index: 2;
  top: -120%;
  height: 120%;
  /*background-color: rgba(80, 80, 80, 0.5);*/
}
.carousel-2 {
  margin-right: 20%;
  margin-left: 10%;
  padding-top: 16rem;
}

.carousel-content-3 {
  position: relative;
  z-index: 2;
  top: -120%;
  height: 120%;
  background-color: rgba(80, 80, 80, 0.5);
}
.carousel-3 {
  margin-right: 20%;
  margin-left: 10%;
  padding-top: 25rem;
}
</style>

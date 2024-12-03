<template>
  <NavMenu ></NavMenu>
  <div id="drawer-target">
    <div class="container" >
      <n-grid cols="2" item-responsive style="background-color: #eff0f5">
        <n-grid-item span="2 720:0" >
          <n-carousel
              ref="carousel"
              :loop="false"
              :show-dots="false"
              :show-arrow="false"
          >
            <n-carousel-item  v-for="(item,i) in product.images" :key="i">
              <div @click="show(item)" style="position: relative;padding: 1rem">
                <img  class="carousel-img-c" :src="item" />
                <div style="position: absolute;top: 8px;left: 16px;font-size: 30px;" >
                  <n-icon >
                    <SearchOutline/>
                  </n-icon>
                </div>
              </div>
            </n-carousel-item>
          </n-carousel>
          <div class="arrow-button">
            <n-button style="margin-right: 1rem" text @click="doPrev">
              <template #icon>
                <n-icon><ChevronBack /></n-icon>
              </template>
            </n-button>
            <div>{{ imageCount + '/' + product.images.length }}</div>
            <n-button style="margin-left: 1rem" text @click="doNext">
              <template #icon>
                <n-icon><ChevronForward /></n-icon>
              </template>
            </n-button>
          </div>
        </n-grid-item>
        <n-grid-item span="0 720:1">
          <div class="div-image">
            <div style="position: relative">
              <n-image
                  @mouseenter="showImage = true" @mouseleave="showImage =false"
                  height="330"
                  width="270"
                  :src="selectedImage"
              />
              <div style="position: absolute;top: 8px;left: 16px;font-size: 30px;" v-if="showImage">
                <n-icon >
                  <SearchOutline/>
                </n-icon>
              </div>
            </div>
            <n-carousel
                :loop="false"
                slides-per-view="3"
                draggable
                class="div-carousel"
                :show-dots="false"
                :show-arrow="true"
            >
              <n-carousel-item v-for="(item,index) in product.images" :key="index">
                <img
                    class="carousel-img"
                    :src="item"
                    @click="selectImage(item)"
                >
              </n-carousel-item>
              <template #arrow="{ prev, next }">
                <div >
                  <n-button quaternary size="small"  style="position: absolute;top: 1.5rem;"  @click="prev">
                    <n-icon><ChevronBack/></n-icon>
                  </n-button>
                  <n-button quaternary size="small" style="position: absolute;top: 1.5rem;right: 0.3rem"  @click="next">
                    <n-icon><ChevronForward/></n-icon>
                  </n-button>
                </div>
              </template>
            </n-carousel>
          </div>
        </n-grid-item>
        <n-grid-item span="2 720:1">
          <div class="div-desc">
            <div>
              SunriseToilet
            </div>
            <div class="title">
              {{product.name}}
            </div>
            <div style="margin-top: 1rem">
              <n-flex>
                <div style="font-size: medium;text-decoration-line: line-through;">{{product.cutPrice}}</div>
                <div  style="font-size: large;">{{product.price}}</div>
                <div><span v-if="product.saleTag" class="sale-tag">Sale</span></div>
              </n-flex>
            </div>
            <div class="desc-content">
              {{product.desc}}
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <div class="div-detail">
      <div class="div-detail-container">
        <n-collapse >
          <template #header-extra>
            <n-icon class="arrow"><ChevronDown /></n-icon>
          </template>
          <n-collapse-item  title="Specifications" name="1">
            <template #arrow >
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l4 4L7 21l-4-4z"></path><path d="M16 7l-1.5-1.5"></path><path d="M13 10l-1.5-1.5"></path><path d="M10 13l-1.5-1.5"></path><path d="M7 16l-1.5-1.5"></path></g></svg>
              </n-icon>
            </template>
            <ul v-for="(item,index) in product.detail.spec" :key="index">
              <li>
                <span>{{item.label + ':'}}</span>
                <span style="margin-left: 0.5rem;color:#465077;">{{item.value}}</span>
              </li>
            </ul>
          </n-collapse-item>
          <n-collapse-item title="Material" name="2">
            <template #arrow >
              <n-icon ><Cog /></n-icon>
            </template>
            <n-flex>
              <div >
                {{product.detail.material}}
              </div>
            </n-flex>
          </n-collapse-item>
          <n-collapse-item title="Warranty " name="3">
            <template #arrow>
              <n-icon><HeartOutline /></n-icon>
            </template>
            <div >
              {{product.detail.warranty}}
            </div>
          </n-collapse-item>
          <n-collapse-item title="Supply Ability" name="4">
            <template #arrow>
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39zM23 11h2.34l2.14 5H23zM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2zm10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23zM23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2zm5-3h-1.14A4 4 0 0 0 23 20v-2h5z" fill="currentColor"></path></svg>
              </n-icon>
            </template>
            <div >
              {{product.detail.supply}}
            </div>
          </n-collapse-item>
        </n-collapse>
      </div>

    </div>
  </div>

  <div class="div-recommended">
    <div style="font-size:xx-large;font-weight: bold;margin-left: 2rem">You may also like</div>
    <product-list></product-list>
  </div>

  <foot></foot>
  <n-back-top />

  <n-modal v-model:show="showImageModel">
    <n-card >
      <template #cover>
        <div >
          <n-icon size="30" style="position:absolute;top: 0;right: 0" @click="showImageModel = false">
            <Close />
          </n-icon>
          <img :src="showItem">
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import NavMenu from "@/components/NavMenu.vue";
import {nextTick, onMounted, ref, watch, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {getProductById} from "@/api/api";
import Foot from "@/views/product/Foot.vue";
import {ChevronForward,ChevronBack,Cog,HeartOutline,ChevronDown,SearchOutline,Close} from '@vicons/ionicons5'
import ProductList from "@/views/product/ProductList.vue";



const route = useRoute()
const selectedImage = ref(getProductById(route.query.id as string).images[0])
const product = ref<Product>(getProductById(route.query.id as string))
onMounted(  async () => {
  window.scrollTo(0,0)
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
  watch(()=>carousel.value.getCurrentIndex(),(o,n)=>{
    imageCount.value = o + 1
  })

})



// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
const divDetailPadding = ref('10rem')
// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  if (windowWidth.value < 720) {
    divDetailPadding.value = '0rem'
  }else {
    divDetailPadding.value = '10rem'
  }
}

const selectImage = (item)=> {
  selectedImage.value = item
}

const imageCount = ref(1)
const doNext = () => {
  if (imageCount.value < product.value.images.length){
    imageCount.value++
  }
  carousel.value.next()
}

const carousel = ref(null)



const doPrev = () => {
  if (imageCount.value > 1){
    imageCount.value--
  }
  carousel.value.prev()
}


const showImage = ref(false)
const showImageModel = ref(false)
const showItem = ref('')

const show = (item)=> {
  showItem.value = item
  showImageModel.value = true
}
</script>

<style scoped>
.container {
  position: relative;
}
.div-image {
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
}
.carousel-img {
  border-radius: 1rem;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-left: 2rem;
  margin-right: 2rem;
  cursor: pointer;
}
.div-carousel {
  margin: 2rem;
  width: 22rem;
  padding-right: 2rem;

}
.div-desc {
  margin-top: 2rem;
  padding: 1rem;
}
.title {
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
}
.sale-tag {
  background-color: #4770db;
  padding: 0.2rem 0.5rem 0.3rem;
  color: #ffffff;
}
.desc-content {
  white-space: pre-line;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #465077;
  letter-spacing:1px;
  line-height: 2
}
.div-detail{
  background-color: #eff0f5;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
}

.div-detail-container {
  background-color: #ffffff;
  width: 80%;
  border-radius: 20px;
  padding: 2rem;
}

::v-deep(.n-collapse .n-collapse-item.n-collapse-item--active  .n-collapse-item-arrow){
  transition: none!important;
  transform: rotate(0)!important;
}
::v-deep(.n-collapse-item__header--active) .arrow{
  transform: rotate(180deg);
}


.carousel-img-c {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: transparent;
}


.arrow-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

/*li::before {*/
/*  content: "";*/
/*  display: block;*/
/*  width:4px;*/
/*  height:4px;*/
/*  background-color: #999999;*/
/*  position: absolute;*/
/*  left: 0;*/
/*  top:14px;*/
/*  border-radius: 50%;*/
/*}*/

::v-deep(.n-collapse-item__header-main:hover){
  text-decoration: underline!important;
}

.div-recommended {
  background-color: #eff0f5;
}

</style>

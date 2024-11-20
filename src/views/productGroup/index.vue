<template>
  <NavMenu ></NavMenu>
  <div id="drawer-target" style="position: relative">
    <div  class="div-1" :style="{ backgroundImage: `url(${products.bg})` }">
      <n-grid style="border-radius: 1rem;" :cols="5" item-responsive>
        <n-grid-item class="div-desc" span="0 720:3">
          <n-card :title="products.name" size="large">
            {{products.desc}}
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
    <div  class="div-2">
      <n-grid cols="1" item-responsive>
        <n-grid-item  span="1 720:0">
          <div class="div-image" :style="{ backgroundImage: `url(${products.bg})`}"></div>
        </n-grid-item>
      </n-grid>
      <n-grid cols="1" item-responsive>
        <n-grid-item  span="1 720:0">
          <n-card :title="products.name" size="large">
            {{products.desc}}
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
    <product-list></product-list>
  </div>
  <foot></foot>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getProductsByGroup} from "@/api/api";
import {useRoute} from "vue-router";
import NavMenu from "@/components/NavMenu.vue";
import ProductList from "@/views/productGroup/ProductList.vue";
import Foot from "@/views/productGroup/Foot.vue";
const route = useRoute()
const products = ref<ProductGroup>({
  id: '',
  name: '',
  desc: '',
  products: [],
  bg:''
})

onMounted(()=>{
  let groupId = route.query.id as string
  products.value = getProductsByGroup(groupId)
  window.scrollTo(0,0)
})
</script>

<style scoped>
::v-deep(.n-card-header) {
  font-weight: bolder!important;
  font-size: 50px!important;

}
::v-deep(.n-card-header__main) {
  color: #ffffff!important;
}
::v-deep(.n-card__content){
  color: #b2c6d2!important;
  font-size: 15px;
  line-height: 1.8rem
}
.div-desc {
  background-color: transparent;
  padding: 4rem;
  color: #ffffff;
}
.div-1 {
  position: relative;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
.div-1 .n-card{
  background-color: #0e1b4d;
  border-radius: 1rem;
}
.div-2 {

}
.div-2 .n-card{
  background-color: #0e1b4d;
}
.div-image {
  height: 15rem;
  width: 80%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

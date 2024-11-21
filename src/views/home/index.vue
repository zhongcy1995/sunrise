<template >
  <NavMenu ></NavMenu>
  <div style="background-color: #eff0f5;position: relative" id="drawer-target">
    <div><Carousel/></div>
    <div>
      <div class="div-h1">Get the B2B Price Today.</div>
      <div class="div-h1">(Our MOQ:10 sets)</div>
      <div class="div-h2">Whatsapp: +86 18100120628</div>
      <div class="div-h2">Email: Sales@sunrise-moulding.com</div>
    </div>
    <product-list></product-list>
    <desc-div1></desc-div1>
    <desc-div2></desc-div2>
    <div class="div-h1">Accessories (more are coming soon...)</div>
    <div style="margin-left: 2rem;">
      <n-flex :wrap="false">
        <n-card @mouseleave="shows[index] =!shows[index]" @mouseenter="shows[index] =!shows[index]" v-for="(item,index) in items" size="small" :key="index">
          <template #cover>
            <img :class="shows[index]? 'Anim' : 'uAnim'" :src="item.imageUrl">
          </template>
          <div  :class="shows[index] ? 'title title-underline' : 'title'" >{{item.name}}</div>
          <div style="margin-top: 1rem">{{item.price}}</div>
        </n-card>
      </n-flex>
    </div>
    <desc-div3></desc-div3>
    <desc-div4></desc-div4>
    <foot></foot>

  </div>


</template>

<script lang="ts" setup>
import Carousel from "@/views/home/Carousel.vue";
import NavMenu from "@/components/NavMenu.vue";
import ProductList from "@/views/home/ProductList.vue";
import DescDiv1 from "@/views/home/DescDiv1.vue";
import DescDiv2 from "@/views/home/DescDiv2.vue";
import DescDiv3 from "@/views/home/DescDiv3.vue";
import DescDiv4 from "@/views/home/DescDiv4.vue";
import Foot from "@/views/home/Foot.vue";
import {getProductsByIds} from "@/api/api";
import {onMounted, ref} from "vue";

const items = getProductsByIds(['p0501','p0502'])

const shows = ref<Boolean[]>([])

onMounted(()=>{
  items.forEach(i=>{
    shows.value.push(false)
  })
})

</script>

<style scoped>
.div-h1{
  margin-left: 10%;
  margin-top:1.333rem;
  margin-right: 10%;
  color: #0e1b4d;
  font-weight: 900;
  font-size: 3rem;
}
.div-h2{
  margin-left: 10%;
  margin-right: 10%;
  margin-top:1.333rem;
}

.n-card {
  max-width: 16rem;
  background-color: #eff0f5;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #0e1b4d;
  margin-bottom: 2rem;
  margin-right: 2rem;
}



/*动画开始*/
.uAnim{
  animation: showMsg2 0.8s ;
  animation-fill-mode: forwards
}

@keyframes showMsg2 {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}


.Anim{
  animation: showMsg 0.6s ;
  animation-fill-mode: forwards
}

@keyframes showMsg {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
/*动画结束*/
.title {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 15px
}

.title-underline {
  text-decoration: underline;
}

</style>

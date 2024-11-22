<template>
  <div class="product-card-container">
    <n-flex :wrap="false">
      <n-card   size="small" @mouseleave="show = false" @mouseenter="show = true" @click="showProduct(card)">
        <template #cover>
          <span v-if="props.card.saleTag" class="sale-tag">Sale</span>
          <Transition name="fade" mode="out-in">
            <img v-if="show" :src="card.imageUrl" >
            <img v-else :src="card.imageUrl2" >
          </Transition>
        </template>
        <div :class="show ? 'product-image-name product-image-name-hover': 'product-image-name'" >{{card.name}}</div>
        <div style="margin-top: 1rem">
          <n-flex >
            <div class="product-price-off">{{props.card.cutPrice}}</div>
            <div class="product-price">{{card.price}}</div>
          </n-flex>
        </div>
      </n-card>
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";
const border = ref('')
const router = useRouter()
onMounted(() => {
  border.value = props.card.border
})
const props = defineProps({
  card: Object,
  default: () => ({
    id: '',
    name: '',
    imageUrl: '',
    price: '',
    cutPrice: '',
    imageUrl2: '',
    saleTag: false
  })
})


const showProduct = (p) => {
  router.replace({
    name:'Product',
    query: {
      id: p.id,
      t: new Date().getTime()
    }
  })
}


const show = ref(false)

</script>

<style scoped>
.product-card-container {
  margin: 1.5rem 1.2rem;
}
.product-card-container:hover{
  cursor: pointer;
}

.n-card {
  max-width: 16rem;
  height: 22rem;
  background-color: #eff0f5;
  padding: 0.2rem;
  border-radius:1rem;
  border: v-bind(border);
}
.product-image-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-container {

}
.product-image {
  height: 13.5rem;
  object-fit: scale-down;
  position: relative;
  margin-top: 0.5rem;
  width: 90%;
}
.product-name {
  font-weight: bold;
  font-size: 15px;
  margin-left: 1rem;
  margin-top: 0.5rem;
  overflow-wrap: anywhere;
}

.product-price-container {
  margin-left: 1rem;
}
.product-price {
  color: #0e1b4d;
  font-size: large;
}
.product-price-off {
  color: #0e1b4d;
  font-weight: lighter;
  font-size: small;
  text-decoration: line-through;
  margin-top: 0.1rem;
}
.sale-tag {
  position: absolute;
  top: 1rem;
  left: 2rem;
  background-color: #4770db;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #ffffff;
}
.product-image-name{
  margin-top: 1rem;
  font-weight: bold;
  font-size: 15px;
  color: #0e1b4d;

}
.product-image-name-hover{
  text-decoration: underline
}


/*动画开始*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1,0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/*动画结束*/

</style>

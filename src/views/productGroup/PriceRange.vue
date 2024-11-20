<template>
  <div class="container">
    <n-grid cols="2" :x-gap="12">
      <n-grid-item span="1">
        <n-input-number min="0" :precision="2" max="999999" v-model:value="priceStart"  :on-blur="inputPrice" round style="width: 10rem" placeholder="From" :input-props="style">
          <template #prefix>
            $
          </template>
        </n-input-number>
      </n-grid-item>
      <n-grid-item span="1">
        <n-input-number min="0" :precision="2" max="999999" v-model:value="priceEnd"   :on-blur="inputPrice" round style="width: 10rem" placeholder="To" :input-props="style">
          <template #prefix>
            $
          </template>
        </n-input-number>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, nextTick, onMounted, onUpdated, ref} from "vue";
import EventBus from '@/assets/common/event-bus'
const condition = ref<Condition>(null)
const priceStart = ref<number>(null)
const priceEnd = ref<number>(null)
const maxPrice = ref<string>('')
const initPriceRange = (val:Condition,price) => {
  maxPrice.value = price
  if (val.priceStart > 0){
    priceStart.value = val.priceStart
  }
  if (val.priceEnd < 999999){
    priceEnd.value = val.priceEnd
  }
  condition.value = val
}

const props = defineProps({
  condition: {
    type: Object
  },
  maxPrice: {
    type: String
  }
})

onMounted(()=>{
  condition.value = props.condition as Condition
  maxPrice.value = props.maxPrice
})



const style = ref({
  style: {
    height: '50px'
  }
})

const inputPrice = () => {
  let priceFrom = '$0.00'
  let priceTo = maxPrice.value
  if (priceStart.value) {
    priceFrom = '$' + priceStart.value.toLocaleString('en-US',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    condition.value.priceStart = priceStart.value
  }
  if (priceEnd.value){
    priceTo = '$' + priceEnd.value.toLocaleString('en-US',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    condition.value.priceEnd = priceEnd.value
  }
  addTag({
    label: priceFrom + '-' + priceTo,
    key:'Price',
    index:1
  })
  EventBus.emit('addFilter',condition.value)
}

EventBus.on('closeTag', (val:Tag)=>{
  if (val.key === 'Price'){
    reset()
  }
})

const reset = () => {
  condition.value.priceEnd = 999999
  condition.value.priceStart = 0
  priceEnd.value = null
  priceStart.value = null
  EventBus.emit('handleFilter',condition.value)
}


const addTag = (tag:Tag) => {
  EventBus.emit('addTag',tag)
}

defineExpose({
  initPriceRange,
  reset
});
</script>


<style scoped>
.container {
  margin: 1rem;
}
</style>

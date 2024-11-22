<template>
  <div class="container" >
    <n-auto-complete
        style="width: 20rem;"
        v-model:value="searchValue"
        :options="options"
        :render-label="renderLabel"
        placeholder="Search..."
        :get-show="getShow"
        size="large"
        clearable
    >
      <template #prefix>
        <n-icon >
          <Search/>
        </n-icon>
      </template>
      <template #suffix>
        <n-icon style="cursor: pointer;margin-left: 1rem" size="20">
          <ArrowForward/>
        </n-icon>
      </template>
    </n-auto-complete>
    <n-icon size="30" style="margin-left: 1rem" @click="closeSearch">
      <CloseOutline/>
    </n-icon>
  </div>



</template>

<script lang="ts" setup>
import type { VNodeChild,VNode } from 'vue'
import {Search,ArrowForward,CloseOutline} from '@vicons/ionicons5'
import EventBus from '@/assets/common/event-bus'
import type { SelectOption } from 'naive-ui'
import {ref, h, computed} from "vue";
import { NImage } from 'naive-ui'
import {getProductList} from "@/api/api";


const searchValue = ref('')
const closeSearch =() => {
  EventBus.emit('close_Search')
}

const renderLabel = (option: SelectOption):VNodeChild => {
  let product = option.value as string
  let imageUrl = product.split('|')[1]
  return [
    '',
    h('div',{
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, [
      h(NImage, { width: '50',src:imageUrl }),
      h('div', {
        class: 'der'
      },{ default: () => option.label}),
    ]),
    ''
  ]
}




const options = computed(()=>{
  let products = getProductList().filter(p=> p.name.includes(searchValue.value))
  return products.map((product) => {
    return {
      label: product.name,
      value:  product.id + '|' + product.imageUrl
    }
  })
})



const getShow = (value: string) => {
  let show = false
  if (value !== ''){
    getProductList().forEach(p=>{
      if (p.name.includes(value)){
        show = true
      }
    })
  }
  return show
}
</script>

<style scoped>
.container {
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.v-binder-follower-content{
  background-color: red;

}
</style>

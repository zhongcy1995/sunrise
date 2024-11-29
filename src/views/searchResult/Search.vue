<template>
  <div class="container" >
    <n-auto-complete
        style="width: 20rem;"
        v-model:value="searchValue"
        :options="options"
        :render-label="renderLabel"
        placeholder="Search..."
        :get-show="getShow"
        :menu-props="search"
        size="large"
        clearable
        :on-select = "showProduct"
    >
      <template #prefix>
        <n-icon >
          <Search/>
        </n-icon>
      </template>
      <template #suffix>
        <n-icon @click="doSearch" style="cursor: pointer;margin-left: 1rem" size="20">
          <ArrowForward/>
        </n-icon>
      </template>
    </n-auto-complete>
  </div>



</template>

<script lang="ts" setup>
import type { VNodeChild,VNode, HTMLAttributes } from 'vue'
import {Search,ArrowForward,CloseOutline} from '@vicons/ionicons5'
import EventBus from '@/assets/common/event-bus'
import type { SelectOption } from 'naive-ui'
import {ref, h, computed, onMounted} from "vue";
import { NImage } from 'naive-ui'
import {getProductById, getProductList} from "@/api/api";
import {products} from "@/api/products";
import {useRouter} from "vue-router";

const searchValue = ref('')

const search = ref<HTMLAttributes>({
  id:'searchDiv',
  style:{borderRadius:'0px 0px 10px 10px'}
})

const renderLabel = (option: SelectOption):VNodeChild => {
  let product = option.value as string
  let imageUrl = product.split('|')[1]
  let index = Number(product.split('|')[2])
  if (index === pCount.value && document.getElementById('search') === null ){
    appendSearch()
  }
  return [
    '',
    h('div',{
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
      }
    }, [
      h(NImage, { width: '50',src:imageUrl }),
      h('div', {

      },{ default: () => option.label}),
    ]),
    ''
  ]
}

const router = useRouter()
const showProduct = (val: string) => {
  let id = val.split('|')[0]
  router.replace({
    name:'Product',
    query: {
      id: id,
      t: new Date().getTime()
    }
  })
}

const appendSearch = () => {
  let search = document.getElementById('searchDiv')
  if (search === null) return
  const newElement = document.createElement('div')
  newElement.id = 'search'
  newElement.innerHTML = '<div style="margin-top: 1rem;border-top: 1px solid #0e1b4d;display: flex;justify-content: flex-start;align-items: center"><div style="margin:  0.5rem 1rem;width: 90%">Search for "'+ searchValue.value+'"</div><div ><svg style="margin:  0.5rem 1rem;width: 1.5rem;height: 1.5rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144l-144 144"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M392 256H100"></path></svg></div></div>';
  // 向 DOM 中添加新元素
  newElement.addEventListener('click',preSearch)
  search.appendChild(newElement);
}


const preSearch = () => {
  deleteSearch()
  let search = document.getElementById('searchDiv')
  if (search === null) return
  const newElement = document.createElement('div')
  newElement.id = 'search'
  newElement.innerHTML = '<div style="border-radius:0px 0px 10px 10px;background-color: rgba(158,202,238,0.5);margin-top: 1rem;border-top: 1px solid #0e1b4d;display: flex;justify-content: flex-start;align-items: center"><div style="margin:  0.5rem 1rem;width: 90%">Search for "'+ searchValue.value+'"</div><div ><svg style="margin:  0.5rem 1rem;width: 1.5rem;height: 1.5rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144l-144 144"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M392 256H100"></path></svg></div></div>';
  // 向 DOM 中添加新元素
  search.appendChild(newElement);
  doSearch()
}

const doSearch = () => {
  router.replace({
    name:'SearchResult',
    query: {
      search: searchValue.value,
      t: new Date().getTime()
    }
  })
}

const deleteSearch = () => {
  let search = document.getElementById('searchDiv')
  if (search === null) return
  // 向 DOM 中添加新元素
  search.removeChild(document.getElementById('search'));
}

const pCount = ref(0)

const options = computed(()=>{
  let index = 0
  let regex = new RegExp('.*'+searchValue.value +'.*',"i")
  let products = getProductList().filter(p=> p.name.match(regex))
  pCount.value = products.length
  return products.map((product) => {
    index++
    return {
      label: product.name,
      value:  product.id + '|' + product.imageUrl + '|' +index
    }
  })
})



const getShow = (value: string) => {
  let show = false
  if (value !== ''){
    getProductList().forEach(p=>{
      let regex = new RegExp('.*'+value +'.*',"i")
      if (p.name.match(regex)){
        show = true
      }
    })
  }
  deleteSearch()
  appendSearch()
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

.div-search{
  background-color: red;
}

::v-deep(.n-input__border) {
  border-radius: 20px!important;
}


::v-deep(.n-input ) {
  border-radius: 20px!important;
}



</style>

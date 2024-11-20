<template>
  <n-dropdown  style="border-radius: 1rem" trigger="click" :options="filterOptions" >
    <n-button quaternary icon-placement="right">
      <template #icon>
        <n-icon>
          <ChevronDown />
        </n-icon>
      </template>
      Price</n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import {h, ref} from "vue";
import {ChevronDown} from '@vicons/ionicons5'
import EventBus from '@/assets/common/event-bus'
import PriceRange from '@/views/productGroup/PriceRange.vue'
const filterOptions = ref([])
const condition = ref<Condition>(null)
const priceRange = ref<PriceRange>(null)
const maxPrice = ref<String>('')
const getMaxPrice = (products:Product[]) =>{
  let max = 0
  products.forEach(p=>{
    let price = Number(p.price.substring(1).replace(',',''))
    if (price > max){
      max = price
      maxPrice.value =  p.price
    }
  })
}

const initFilterOptions = (products,c) => {
  let saleCount = 0;
  condition.value = c
  getMaxPrice(products)
  products.forEach(product => {
    if (product.saleTag){
      saleCount++
    }
  })
  filterOptions.value = [
    {
      key: 'header',
      type: 'render',
      render: () => {
        return h(
            'div',
            {
              style: {
                display: 'flex',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                verticalAlign: '-0.15em',
                marginLeft: '0.1rem'
              },
            },
            [
              h(
                  'div', {

                  },
                  { default: () => 'The highest price is ' + maxPrice.value}
              ),
              h(
                  'div',
                  {
                    style: {
                      textDecoration: 'underline',
                      verticalAlign: '-0.15em',
                      marginLeft: '7rem',
                      marginRight: '1rem',
                      cursor: 'pointer'
                    },
                    onClick: () => {
                      reset()
                    }
                  },
                  { default: () => 'Reset'}
              )
            ]
        )
      }
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      key: 'priceRange',
      type: 'render',
      render: () => {
        return h(
            PriceRange, {
              ref: priceRange,
              condition: condition.value,
              maxPrice: maxPrice.value
            },
        )
      }
    }
  ]

}





const reset = () => {
  EventBus.emit('closeTagFromPriceFilter',{
    label:'',
    key:'Price',
    index:2
  })
  priceRange.value.reset()
}
defineExpose({
  initFilterOptions
});
</script>

<style scoped>

</style>

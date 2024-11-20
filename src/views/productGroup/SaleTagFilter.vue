<template>
  <n-dropdown style="border-radius: 1rem" trigger="click" :options="filterOptions" >
    <n-button quaternary icon-placement="right">
      <template #icon>
        <n-icon>
          <ChevronDown />
        </n-icon>
      </template>
      Availability</n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import {h, ref,defineExpose} from "vue";
import {NCheckbox} from "naive-ui";
import {ChevronDown} from '@vicons/ionicons5'
import EventBus from '@/assets/common/event-bus'


const filterOptions = ref([])
const saleCheck = ref(false)
const unSaleCheck = ref(false)
const selectedCount = ref(0)

const condition = ref<Condition>(null)

const initFilterOptions = (products,c) => {
  condition.value = c
  let saleCount = 0;
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
                justifyContent: 'center',
                alignItems: 'center',
                verticalAlign: '-0.15em',
                marginLeft: '1rem'
              },
            },
            [
                h(
                    'div',null,
                    { default: () => selectedCount.value + ' selected '}
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
      key: 'inStock',
      type: 'render',
      render:() => {return h(
          NCheckbox,
          {
            checked:saleCheck.value,
            ["onUpdate:checked"]: (value) =>{
              // 过滤未上架的
              if (value) {
                condition.value.unSale = true
                selectedCount.value++
                addTag({
                  label:'In stock',
                  key:'Availability',
                  index:1
                })
              }else {
                condition.value.unSale = false
                selectedCount.value--
                EventBus.emit('closeTagFromFilter',{
                  label:'In stock',
                  key:'Availability',
                  index:1
                })
              }
              saleCheck.value = value
              emit('handleFilter',condition.value)
            },
            style: {
              verticalAlign: '-0.15em',
              marginLeft: '1rem'
            },
            disabled: saleCount === 0,
            size:'small'
          },
          { default: () => 'In stock(' + saleCount +')' }
      )}
    },
    {
      key: 'outOfStock',
      type: 'render',
      render:() => {return h(
          NCheckbox,
          {
            checked:unSaleCheck.value,
            ["onUpdate:checked"]: (value) =>{
              if (value) {
                condition.value.sale = true
                selectedCount.value++
                addTag({
                  label:'Out of stock',
                  key:'Availability',
                  index:1
                })
              }else {
                condition.value.sale = false
                selectedCount.value--
                EventBus.emit('closeTagFromFilter',{
                  label:'Out of stock',
                  key:'Availability',
                  index:1
                })
              }
              unSaleCheck.value = value
              // 过滤上架的
              emit('handleFilter',condition.value)
            },
            style: {
              verticalAlign: '-0.15em',
              marginLeft: '1rem',
              marginTop: '0.8rem',
              marginBottom: '0.8rem'
            },
            disabled: (products.length - saleCount) === 0,
            size:'small'
          },
          { default: () => 'Out of stock(' + (products.length - saleCount) +')' }
      )}
    }
  ]
}

const addTag = (tag:Tag) => {
  EventBus.emit('addTag',tag)
}
EventBus.on('closeTag', (val:Tag)=>{
  if (val.key === 'Availability'){
    reset()
  }
})

const reset = () => {
  condition.value.sale = false
  condition.value.unSale = false
  selectedCount.value = 0
  saleCheck.value = false
  unSaleCheck.value = false
  EventBus.emit('closeTagFromSaleFilter',{
    label:'',
    key:'Availability',
    index:1
  })
  emit('handleFilter',condition.value)
}

const emit = defineEmits(['handleFilter']);


defineExpose({
  initFilterOptions
});
</script>

<style scoped>

</style>

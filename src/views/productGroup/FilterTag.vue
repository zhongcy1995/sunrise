<template>
  <div class="container">
    <n-space>
      <n-tag style="border: 1px solid" round :color="{  textColor: '#555', borderColor: '#555' }"size="large" v-for="(item,index) in tags" :key="index" closable @close="handleClose(item)">
        {{item.label}}
      </n-tag>
      <n-tag style="text-decoration: underline" v-if="tags.length > 0" checkable @click="closeAll">
        Remove All
      </n-tag>
    </n-space>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import EventBus from '@/assets/common/event-bus'

const tags = ref<Tag[]>([])
EventBus.on('addTag', (val)=>{
  addTag(val)
})

EventBus.on('closeTagFromFilter', (val)=>{
  tags.value = tags.value.filter(t=> {
    if (t.label.includes(',')) {
      let labels = t.label.split(',').filter(l=>l !== val.label)
      t.label = labels.join(',')
      return true
    }else {
      return t.key !== val.key
    }
  })
  tags.value.sort((t1, t2) => t1.index - t2.index);
})

EventBus.on('closeTagFromSaleFilter', (val:Tag)=>{
  tags.value = tags.value.filter(t=> t.key !== val.key)
  tags.value.sort((t1, t2) => t1.index - t2.index);
})


EventBus.on('closeTagFromPriceFilter', (val:Tag)=>{
  tags.value = tags.value.filter(t=> t.key !== val.key)
  tags.value.sort((t1, t2) => t1.index - t2.index);
})

const addTag = (tag:Tag) => {
  if (tag.key === 'Price') {
    let t1 = tags.value.filter(t=> t.key !== tag.key)
    t1.push(tag)
    tags.value = t1
    tags.value.sort((t1, t2) => t1.index - t2.index);
  } else {
    let t1 = tags.value.filter(t=> t.key === tag.key)
    if (t1.length > 0) {
      t1[0].label = t1[0].label + ',' +tag.label
    }else {
      tag.label = tag.key + ': ' +tag.label
      tags.value.push(tag)
    }
    tags.value.sort((t1, t2) => t1.index - t2.index);
  }
}
const handleClose = (item:Tag) => {
  tags.value = tags.value.filter(t=> t.key !== item.key)
  tags.value.sort((t1, t2) => t1.index - t2.index);
  EventBus.emit('closeTag',item)
}

EventBus.on('clear_ProductList',(val)=>{
  closeAll()
})

EventBus.on('clear_SortDropDown',(val)=>{
  closeAll()
})

const closeAll = () => {
  tags.value.forEach(tag=>{
    handleClose(tag)
  })
  EventBus.emit('clear_filterTag')
}
defineExpose({
  addTag,
  handleClose
});
</script>

<style scoped>
.container {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 15px;
  padding-top: 1rem;
}
.remove {

}
</style>

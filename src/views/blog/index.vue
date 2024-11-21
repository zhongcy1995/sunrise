<template>
  <NavMenu ></NavMenu>
  <div class="container" id="drawer-target" v-if="showContainer">
    <div style="font-size: xx-large;font-weight: bold;margin-bottom: 1rem">News</div>
    <n-grid :x-gap="48" :y-gap="32" cols="2" item-responsive>
      <n-grid-item v-for="(item,index) in blogList" :key="index"  span="2 600:1">
        <n-card @click="showBlog" @mouseenter="titleUnderLine[index] = true" @mouseleave="titleUnderLine[index]  = false">
          <template #cover >
            <img  :class="shows[index]? 'Anim' : 'uAnim'"  :src="item.image">
          </template>
          <div :class="titleUnderLine[index] ? 'title title-underline' : 'title'" @mouseleave="shows[index] =!shows[index]" @mouseenter="shows[index] =!shows[index]">{{item.title}}</div>
          <div class="div-date">{{item.date}}</div>
          <div>{{item.desc}}</div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
  <div class="detail-container" v-if="!showContainer" id="drawer-target">
    <div style="max-width: 600px" v-html="content"></div>
  </div>
  <foot></foot>
</template>

<script lang="ts" setup>
import NavMenu from "@/components/NavMenu.vue";
import Foot from "@/views/blog/Foot.vue";
import {blogList} from "@/api/blog";
import {onMounted, ref} from "vue";
import MarkdownIt from "markdown-it";
import { marked } from 'marked'



const shows = ref<Boolean[]>([])
const titleUnderLine = ref<Boolean[]>([])
const showContainer = ref(true)
// 显示描述md
const dsmd = new MarkdownIt();
const dsContent = ref(dsmd.render(''));
const md = new MarkdownIt();
const content = ref(md.render(''));
onMounted(()=>{
  blogList.forEach(b=>{
    shows.value.push(false)
    titleUnderLine.value.push(false)
  })
  content.value = md.render(blogList[0].file)
  // dsContent.value = dsmd.render(blogList[0].file)
})

const showBlog = () => {
  showContainer.value = false
  window.scrollTo(0,0)
}




</script>


<style scoped>
.container {
  padding: 4rem;
}
.n-card{
  max-height: 35rem;
  border-radius: 10px;
  border: 1px solid #0e1b4d;
  cursor: pointer;
}
.div-date {
  font-size: small;
  font-weight: bold;
  margin-bottom: 1rem;
}


/*动画开始*/
.uAnim{
  animation: showMsg2 0.8s ;
  animation-fill-mode: forwards
}

@keyframes showMsg2 {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}


.Anim{
  animation: showMsg 0.8s ;
  animation-fill-mode: forwards
}

@keyframes showMsg {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}
/*动画结束*/


.title {
  font-weight: bold;
  font-size: x-large;
  cursor: pointer;
}

.title-underline {
  text-decoration: underline;
}

.detail-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

</style>

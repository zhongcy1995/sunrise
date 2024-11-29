<template>
  <NavMenu ></NavMenu>
  <div class="container" id="drawer-target" >
    <div class="form-container"  >
      <n-grid cols="6" x-gap="20" >
        <n-form-item-grid-item span="1" >
        </n-form-item-grid-item>
        <n-form-item-grid-item span="4" >
          <div style="color: #0e1b4d;font-size: 60px;font-weight: bold">Contact us</div>
        </n-form-item-grid-item>
        <n-form-item-grid-item span="1" >
        </n-form-item-grid-item>

        <n-form-item-grid-item span="1" >
        </n-form-item-grid-item>
        <n-form-item-grid-item span="4" >
          <div style="color: #0e1b4d;font-size: 25px;font-weight: bold">To drop us an email, please fill out this form and we will be in touch shortly.</div>
        </n-form-item-grid-item>
        <n-form-item-grid-item span="1" >
        </n-form-item-grid-item>
      </n-grid>

      <n-form ref="formRef"
              :style="{paddingLeft: padding,paddingRight: padding}"
              :model="modelRef"
              label-placement="left"
              :rules="rules"
      >

<!--        <n-flex :style="{paddingLeft: padding,paddingRight: padding}">-->
<!--          <n-input-->
<!--              :style="{height: '3.5rem',width: width}"-->
<!--              v-model:value="modelRef.name"-->
<!--              @keydown.enter.prevent-->
<!--              round-->
<!--              size="large"-->
<!--              :placeholder="null"-->
<!--              @focus="onFocus(0)"-->
<!--              @blur="onBlurName"-->
<!--          />-->
<!--          <n-input-->
<!--              :style="{height: '3.5rem',width: width}"-->
<!--              v-model:value="modelRef.email"-->
<!--              @keydown.enter.prevent-->
<!--              round-->
<!--              size="large"-->
<!--              :placeholder="null"-->
<!--              @focus="onFocus(1)"-->
<!--              @blur="onBlurEmail"-->
<!--          />-->
<!--          <n-input-->
<!--              style="height: 3.5rem"-->
<!--              v-model:value="modelRef.phone"-->
<!--              @keydown.enter.prevent-->
<!--              round-->
<!--              size="large"-->
<!--              :placeholder="null"-->
<!--              @focus="onFocus(2)"-->
<!--              @blur="onBlurPhone"-->
<!--          />-->
<!--          <n-input-->
<!--              v-model:value="modelRef.comment"-->
<!--              type="textarea"-->
<!--              :autosize="{minRows:3}"-->
<!--              @keydown.enter.prevent-->
<!--              round-->
<!--              size="large"-->
<!--              :placeholder="null"-->
<!--              @focus="onFocus(3)"-->
<!--              @blur="onBlurComment"-->
<!--          />-->
<!--          <n-button round type="info" size="large" style="width: 7rem" @click="sendMessage">Send</n-button>-->
<!--        </n-flex>-->



        <n-grid cols="2" x-gap="20" >
          <n-form-item-gi :span="span[0]" path="name">
            <n-input
                :style="{height: '3.5rem'}"
                v-model:value="modelRef.name"
                @keydown.enter.prevent
                round
                size="large"
                :placeholder="null"
                @focus="onFocus(0)"
                @blur="onBlurName"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="span[1]">
            <n-input
                :style="{height: '3.5rem'}"
                v-model:value="modelRef.email"
                @keydown.enter.prevent
                round
                size="large"
                :placeholder="null"
                @focus="onFocus(1)"
                @blur="onBlurEmail"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="span[2]" >
            <n-input
                style="height: 3.5rem"
                v-model:value="modelRef.phone"
                @keydown.enter.prevent
                round
                size="large"
                :placeholder="null"
                @focus="onFocus(2)"
                @blur="onBlurPhone"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="span[3]">
            <n-input
                v-model:value="modelRef.comment"
                type="textarea"
                :autosize="{minRows:3}"
                @keydown.enter.prevent
                round
                size="large"
                :placeholder="null"
                @focus="onFocus(3)"
                @blur="onBlurComment"
            />
          </n-form-item-gi>
        </n-grid>
        <n-button round type="info" size="large" style="width: 7rem" @click="sendMessage">Send</n-button>
      </n-form>


    </div>



    <div style="margin-bottom: 2rem">
      <div style="margin-bottom: 1rem;color: #0e1b4d;font-size: 40px;font-weight: bold;text-align: center">Or, get the quotation NOW</div>
      <div style="margin-bottom: 1rem;color: #0e1b4d;font-size: 15px;text-align: center">Whatsapp: +86 18100120628</div>
      <div style="margin-bottom: 1rem;color: #0e1b4d;font-size: 15px;text-align: center">Email: Sales@sunrise-moulding.com</div>
    </div>


    <foot></foot>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from "@/components/NavMenu.vue";
import Foot from "@/views/contact/Foot.vue";
import {useMessage } from 'naive-ui'
import {onMounted, ref, h, render} from "vue";
import type { FormInst } from 'naive-ui'

interface ModelType {
  name: string | null,
  email: string | null,
  phone: string | null,
  comment: string | null
}
const formRef = ref<FormInst | null>(null)
const modelRef = ref<ModelType>({
  name: null,
  email: null,
  phone: null,
  comment: null
})

onMounted(  ()=>{
  initPlaceholder()
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
})


// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
const width = ref('49%')
const padding = ref('8rem')
const span = ref([1,1,2,2])
// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  if (windowWidth.value <= 720) {
    width.value = '100%'
    padding.value = ''
    span.value = [2,2,2,2]
  }else {
    width.value = '49%'
    padding.value = '8rem'
    span.value =[1,1,2,2]
  }
}


const  inputClass = ref('n-input__placeholder')

const onFocus = (index:number) => {
  let node = document.getElementById('input-'+index)
  if (node ){
    if (index !== 3){
      node.className = 'n-input__placeholder_focus'
    }else {
      node.className = 'n-input__placeholder_focus_c'
    }
  }
}

const onBlurName  = () =>{
  let node = document.getElementById('input-0')
  if (node && (modelRef.value.name === null || modelRef.value.name === '')){
    node.className = 'n-input__placeholder'
    node.children[0].className = ''
  }
}

const onBlurEmail  = () =>{
  let node = document.getElementById('input-1')
  if (node && (modelRef.value.email === null || modelRef.value.email === '')){
    node.className = 'n-input__placeholder'
    node.children[0].className = ''
  }
}


const onBlurPhone  = () =>{
  let node = document.getElementById('input-2')
  if (node && (modelRef.value.phone === null || modelRef.value.phone === '')){
    node.className = 'n-input__placeholder'
    node.children[0].className = ''
  }
}


const onBlurComment  = () =>{
  let node = document.getElementById('input-3')
  console.log('aaaa')
  if (node && (modelRef.value.comment === null || modelRef.value.comment === '')){
    node.className = 'n-input__placeholder'
    node.children[0].className = ''
  }
}


const labelList = ['Name','Email *','Phone number']
const initPlaceholder = () =>{

  let nodes = document.getElementsByClassName('n-input__input')
  for (let i = 0; i < nodes.length; i++) {

    let div = h(
        'div',
        {
          id:'input-' + i,
          class: inputClass.value
        },
        [h('span',{ class:'n-input__placeholder_blur'},{ default: () => labelList[i] })]
    )
    let child = nodes[i].children[0]
    render(div,nodes[i])
    nodes[i].removeChild(child)
    nodes[i].appendChild(child)
  }


  let nodesT = document.getElementsByClassName('n-input__textarea')
  let div = h(
      'div',
      {
        id:'input-' + 3,
        class: inputClass.value
      },
      [h('span',{class:'n-input__placeholder_blur'},{ default: () => 'Comment' })]
  )
  let child = nodesT[0].children[0]
  render(div,nodesT[0])
  nodesT[0].removeChild(child)
  nodesT[0].appendChild(child)
}


const message = useMessage()
const sendMessage = () => {
  if (!modelRef.value.email){
    message.error('Send fail ! Please add your email.')
  }else {
    let valid = modelRef.value.email.match(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
    if (valid){
      message.success('Send success!')
    }else {
      message.error('Please enter a valid email !')
    }
  }
}

</script>

<style scoped>


.container {
  position: relative;
  background-color: #eff0f5;

}

.form-container {
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding-top: 2rem
}



::v-deep(.n-input__placeholder) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  color: rgba(70, 80, 119, 0.68);
}

::v-deep(.n-input .n-input__input-el){
  height: 2.5rem;
  line-height: 1.5rem;
  font-size: large;
}

::v-deep(.n-input__placeholder_focus) {
  font-size: 2px;
  color: rgba(70, 80, 119, 0.68);
}

::v-deep(.n-input__placeholder_blur) {
  color: rgba(70, 80, 119, 0.68);
}

::v-deep(.n-input ){
  --n-color: #eff0f5!important;
  border: 1px solid #0e1b4d ;
  margin-bottom: 1rem;
}


::v-deep(.n-input__placeholder_focus_c) {
  position: absolute;
  top: 0;
  font-size: 2px;
  color: rgba(70, 80, 119, 0.68);
}

::v-deep(.n-input__textarea-el){
  margin-top: 1rem!important;
}
</style>

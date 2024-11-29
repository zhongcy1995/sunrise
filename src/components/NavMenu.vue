<template>
  <div class="top-title">#1 Portable Sanitations Manufacturer in China.</div>
  <n-grid x-gap="12" :cols="5" item-responsive  id="drawer-target-search" style="background-color:  #eff0f5">
    <n-grid-item class="menu-item" span="2 250:1 1000:0">
      <n-button v-if="!active" class="menu-button" icon-placement="right" secondary strong @click="activate">
        <template #icon>
          <n-icon >
            <MenuIcon />
          </n-icon>
        </template>
      </n-button>
      <n-button v-if="active" class="menu-button" icon-placement="right" secondary strong @click="close">
        <template #icon>
          <n-icon >
            <Close />
          </n-icon>
        </template>
      </n-button>
    </n-grid-item>
    <n-grid-item class="menu-item" span="0 250:2 1000:1">
      <n-image
          :preview-disabled="true"
          width="100"
          :src="imgUrl"
      />
    </n-grid-item >
    <n-grid-item class="menu-item" span="0 1000:2">
      <n-menu
          v-model="activeKey"
          class="menu-options"
          mode="horizontal"
          :options="menuOptions"
          responsive
      />
    </n-grid-item>
    <n-grid-item span="3 250:2">
      <div class="search-icon">
        <n-icon style="cursor: pointer;margin-left: 1rem" size="20" @click="searchActivate">
          <Search/>
        </n-icon>
      </div>
    </n-grid-item>
  </n-grid>

  <n-drawer v-model:show="active"
            :width="280"
            :placement="placement"
            :trap-focus="false"
            :block-scroll="true"
            to="#drawer-target"
  >
    <n-drawer-content >
      <n-menu
          v-model="activeKey"
          :options="menuOptions"
          responsive
      />
    </n-drawer-content>
  </n-drawer>


  <n-drawer v-model:show="searchActive"
            :height="100"
            :placement="'top'"
            :trap-focus="false"
            :block-scroll="true"
            to="#drawer-target-search"
  >
    <n-drawer-content style="background-color: #eff0f5">
      <search-product></search-product>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import {Close, Menu as MenuIcon, Search} from '@vicons/ionicons5'
import imgUrl from "@/static/images/title.png"
import type {DrawerPlacement, MenuOption} from 'naive-ui'
import {NIcon} from 'naive-ui'
import {h, onMounted, ref, Text} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import {getProductGroups} from "@/api/api";
import SearchProduct from "@/components/Search.vue";
import EventBus from '@/assets/common/event-bus'

const searchActive = ref(false)
const active = ref(false)
const placement = ref<DrawerPlacement>('left')
const showProduct = ref(false)

const router = useRouter()

const activate = () => {
  active.value = true

}
const searchActivate = () => {
  searchActive.value = true
}
EventBus.on('close_Search',(val)=>{
  searchActive.value = false
})

const close = () => {
  active.value = false
}
const menuOptions = ref<MenuOption[]>([
  {
    label: () => h(
        'div', {
          class:'n-menu-item-content-header',
          style: {
            textDecoration: activeKey.value === 'Product' ? 'underline' : ''
          }
        },
        { default: () => 'Product' }
    ),
    key: 'Product',
    children: []
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'HomePage'
          },
          onClick: () =>{
            if (router.currentRoute.value.name === 'HomePage') {
              router.go(0)
            }
          },
          class:'n-menu-item-content-header',
          style: {
            textDecoration: activeKey.value === 'HomePage' ? 'underline' : ''
          }
        },
        { default: () => 'Home' }
    ),
    key: 'Home'
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'Blog'
          },
          onClick: () =>{
            if (router.currentRoute.value.name === 'Blog') {
              router.go(0)
            }

          },
          class: 'n-menu-item-content-header',
          style: {
              textDecoration: activeKey.value === 'Blog' ? 'underline' : ''
          }
        },
        { default: () => 'Blog' }
    ),
    key: 'Blog'
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'Contact'
          },
          onClick: () =>{
            if (router.currentRoute.value.name === 'Contact') {
              router.go(0)
            }
          },
          class:'n-menu-item-content-header',
          style: {
            textDecoration: activeKey.value === 'Contact' ? 'underline' : ''
          }
        },
        { default: () => 'Contact us' }
    ),
    key: 'Contact us',
  }
])
const activeKey = ref<string | null>(null)

const getActiveKey = () => {
  switch (router.currentRoute.value.name) {
    case "HomePage":
      activeKey.value = "HomePage"
      break;
    case "Blog":
      activeKey.value = "Blog"
      break;
    case "Contact":
      activeKey.value = "Contact"
      break;
    default:
      activeKey.value = "Product"
  }
}

// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命周期
onMounted(() => {
  getActiveKey()
  initProductGroup()
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
})
// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  if (windowWidth.value > 1000) {
    active.value = false
  }
}

const initProductGroup = () => {
  getProductGroups().forEach((group) => {
    menuOptions.value[0].children.push(
        {
          label: () => h(
              RouterLink,
              {
                to: {
                  name: 'ProductGroup',
                  query: {
                    id: group.id
                  }
                },
                onClick: () =>{
                  if (router.currentRoute.value.name === 'ProductGroup' && router.currentRoute.value.query.id === group.id) {
                    router.go(0)
                  }
                }
              },
              { default: () => group.name }
          ),
          key: group.id,
        }
    )
  })
}
</script>

<style scoped>
.search-icon {
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.green {
  height: 3rem;
  background-color: rgba(0, 128, 0, 0.24);
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;

}

.menu-button {
  background-color: transparent;
}
.menu-button:active {
  background-color: transparent;
}
.menu-button:hover {
  background-color: transparent;
}
.menu-options:hover{
  text-decoration: underline;
}
.top-title {
  text-align:center;
  background-color: red;
  padding: 0.3rem;
}

:deep(.n-menu-item-content-header){
  color: #5d6688!important;
}

.active-header {
  text-decoration: underline;
}

::v-deep(.n-menu-item-content-header:hover){
  text-decoration: underline;
}


::v-deep(.n-menu-item-content-header:active){
  text-decoration: underline;
}
</style>

<template>
  <div class="top-title">#1 Portable Sanitations Manufacturer in China.</div>
  <n-grid x-gap="12" :cols="5" item-responsive>
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
      <div class="light-green" />
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
</template>

<script lang="ts" setup>
import {
    Menu as MenuIcon,
    CaretDownOutline,
    Close
} from '@vicons/ionicons5'
import imgUrl from "@/static/images/title.png"
import type { MenuOption } from 'naive-ui'
import {h, onBeforeUnmount, onMounted, ref} from 'vue'
import { NIcon } from 'naive-ui'
import {RouterLink, useRoute, useRouter} from 'vue-router'
import type { DrawerPlacement } from 'naive-ui'
import {getProductGroups} from "@/api/api";


const active = ref(false)
const placement = ref<DrawerPlacement>('left')
const showProduct = ref(false)

const router = useRouter()

const activate = () => {
  active.value = true

}
const close = () => {
  active.value = false
}
const menuOptions = ref<MenuOption[]>([
  {
    label: 'Product',
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
          class:'n-menu-item-content-header'
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
          class:'n-menu-item-content-header'
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
          class:'n-menu-item-content-header'
        },
        { default: () => 'Contact us' }
    ),
    key: 'Contact us',
  }
])
const activeKey = ref<string | null>(null)

// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命周期
onMounted(() => {
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
.light-green {
  height: 3rem;
  background-color: rgba(0, 128, 0, 0.12);
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
  padding: 0.267rem;
}

:deep(.n-menu-item-content-header){
  color: #5d6688!important;
}

</style>

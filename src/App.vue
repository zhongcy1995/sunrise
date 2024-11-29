<template>
  <n-message-provider>
    <RouterView :key="route.fullPath"/>
  </n-message-provider>
</template>

<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
</script>


<style scoped>

</style>

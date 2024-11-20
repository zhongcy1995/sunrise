<template>
  <div class="container">
    <div class="div-1">
      <div style="color: white;font-weight: bold;font-size: 2rem;margin-bottom: 1rem">
        Visit us in China.
      </div >
      <div style="color: white;font-weight: bold;font-size: 1.2rem;margin-bottom: 1rem">
        Company address: 222 Lehai Rd, Beilun District, Ningbo, Zhejiang, China 315800
      </div>
    </div>
    <div class="div-2">
      <n-grid cols="3" item-responsive x-gap="20" style="margin-bottom: 2rem">
        <n-grid-item style="margin-top: 4rem" span="3 720:1">
          <div class="card-head">Shop</div>
          <div class="card-content">Find us on Alibaba.com</div>
        </n-grid-item>
        <n-grid-item style="margin-top: 4rem" span="3 720:1">
          <div class="card-head">Our mission</div>
          <div class="card-content">We make the greatest roto-moulding sanitation prodcuts so you can conduct your business anywhere.</div>
        </n-grid-item>
        <n-grid-item style="margin-top: 4rem" span="3 720:1">
          <div class="card-head">About</div>
        </n-grid-item>
      </n-grid>
    </div>
    <div style="justify-content: center;display: flex;align-items: center">
      <div class="div-foot">
        © 2024, SunriseToilet
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.container {
  background-color: #0e1b4d;
}
.div-1 {
  padding-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
}


.div-2 {
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #5d6688;
}

.card-head {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.card-content {
  background-color: transparent;
  color: #b7bbcb;
  font-size: 0.92rem;
}
.div-foot {
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: lightgray;
}
</style>

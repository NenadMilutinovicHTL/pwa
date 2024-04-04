<script setup>
import Camera from './Camera.vue';
import Maps from './Maps.vue';
</script>

<template>
  <div>
    <div>
      <h6 class="raleway title">Take a picture and edit it</h6>
    </div>
    <Camera></Camera>
    <Maps></Maps>
  </div>

</template>

<style lang="css" scoped>
.title {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>

<script setup></script>

<template>
  <div>
    <video
      ref="video"
      autoplay
      playsinLine
      webkit-playsinLine
      muted
      hidden
    ></video>

    <div class="canvasContainer">
      <canvas
        ref="canvas"
        width="720"
        height="480"
        class="bg-black rounded-canvas"
      ></canvas>
    </div>

    <div class="flex items-center justify-center py-4">
      <q-btn color="green"> Take Pic </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.canvasContainer {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.rounded-canvas {
  border-radius: 10px; /* Adjust the value as needed */
}
</style>

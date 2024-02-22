<script setup>
import { ref, onMounted } from 'vue';
import { usePicturesStore } from '../stores/picturesStore.js';

let store = usePicturesStore();

const canvas = ref(null);
const video = ref(null);
const ctx = ref(null);

let base64 = ref(null);
let imagename = ref(null);

const constraints = ref({
  audio: false,
  video: true,
});

onMounted(async () => {
  if (video.value && canvas.value) {
    ctx.value = canvas.value.getContext('2d');

    await navigator.mediaDevices
      .getUserMedia(constraints.value)
      .then(SetStream)
      .catch((e) => {
        console.error(e);
      });
  }
});

function SetStream(stream) {
  video.value.srcObject = stream;
  video.value.play();
  requestAnimationFrame(Draw);
}

function Draw() {
  ctx.value.drawImage(
    video.value,
    0,
    0,
    canvas.value.width,
    canvas.value.height
  );
  requestAnimationFrame(Draw);
}

function TakePicture() {
  var link = document.createElement('a');
  link.download = `vue-cam-${new Date().toISOString()}.png`;
  link.href = canvas.value.toDataURL();

  base64.value = canvas.value.toDataURL();
  imagename.value = `vue-cam-${new Date().toISOString()}.png`;

  link.click();

  let picture = {
    isOriginal: false,
    timestamp: new Date(),
    img: base64.value,
    image: imagename.value,
  };
  
  store.postPicture(picture);
}
</script>

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
        width="1920"
        height="1080"
        class="bg-black rounded-canvas"
      ></canvas>
    </div>

    <div class="flex items-center justify-center py-4">
      <q-btn @click="TakePicture()" class="picBtn"> Take Pic </q-btn>
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
  width: 720px;
  height: 480px;
}

.picBtn {
  background-color: #5ecedc;
}
</style>

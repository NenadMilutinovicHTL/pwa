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

const canvasWidth = ref('');

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

  // Initialize the canvas width when the component is mounted
  calculateCanvasWidth();

  // Add event listener to update canvas width when the window is resized
  window.addEventListener('resize', calculateCanvasWidth);
  console.log(canvasWidth.value);
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
  // console.log(canvas.value.width, canvas.value.height);
  requestAnimationFrame(Draw);
}

function TakePicture() {
  requestAnimationFrame(Draw);

  var link = document.createElement('a');

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}${month}${year}${hours}${minutes}`;

  link.download = `pic_${formattedDate}.png`;
  link.href = canvas.value.toDataURL();

  base64.value = canvas.value.toDataURL('image/png');
  imagename.value = link.download;

  console.log(imagename.value);
  console.log(link.download);
  link.click();

  let picture = {
    isOriginal: true,
    timestamp: new Date(),
    img: base64.value,
    image: imagename.value,
  };

  store.postPictures(picture);
}

function calculateCanvasWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    // Adjust the breakpoint as needed
    return (canvasWidth.value = '330px');
  } else {
    return (canvasWidth.value = '480px');
  }
}

//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ
//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ

//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ//MarvinJ
</script>

<template>
  <div>
    <div class="container">
      <video
        ref="video"
        autoplay
        playsinLine
        webkit-playsinLine
        muted
        hidden
      ></video>

      <div class="canvasContainer" :style="{ width: canvasWidth }">
        <canvas
          ref="canvas"
          width="1920"
          height="1080"
          class="bg-black rounded-canvas"
        ></canvas>
      </div>
    </div>

    <div class="flex items-center justify-center py-4">
      <q-btn @click="TakePicture()" class="picBtn"> Take Pic </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvasContainer {
  margin: 20px;
}

.rounded-canvas {
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;
}

.picBtn {
  background-color: #5ecedc;
}
</style>

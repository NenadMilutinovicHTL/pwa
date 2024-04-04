<script setup>
import { usePicturesStore } from '../stores/picturesStore';
import { ref } from 'vue';

const store = usePicturesStore();
store.getPictures();

const imagename = ref('');
const prompt = ref(false);

const cols = [
  {
    name: 'img',
    field: 'img',
    label: 'img',
    align: 'center',
    // format: (img) => (img ? img.substring(0, 10) + '...' : ''),
  },
  {
    name: 'isOriginal',
    field: 'isoriginal',
    label: 'isOriginal',
    align: 'left',
    format: (isOriginal) => (isOriginal ? 'true' : 'false'),
  },
  {
    name: 'timestamp',
    field: 'timestamp',
    label: 'Zeit',
    align: 'left',
    width: '4%',
  },

  { name: 'image', field: 'image', label: 'Bild', align: 'left' },
  { name: 'actions', field: 'actions', label: 'Aktionen', align: 'left' },
];

const formatPictures = (pictures) => {
  return pictures.map((picture) => {
    return {
      ...picture,
      img: picture.img ? picture.img.substring(0, 10) + '...' : '',
    };
  });
};
</script>

<template>
  <!-- <div class="q-mt-md q-ml-sm q-mr-sm">
    <q-card>
      <q-table
        grid
        title="Pictures"
        :rows="formatPictures(store.pictures)"
        :columns="cols"
        row-key="id"
        :pagination="{ rowsPerPage: 10 }"
        class="lt-sm"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              @click="store.deletePictures(props.row)"
              class="glossy"
              icon="fa-solid fa-trash"
              rounded
              color="negative"
              label="Delete"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div> -->
  <div
    class="container d-flex flex-column align-items-center q-mt-md q-ml-sm q-mr-sm"
  >
    <q-table
      grid
      title="Pictures"
      :rows="store.pictures"
      :columns="cols"
      row-key="id"
      :pagination="{ rowsPerPage: 10 }"
      class="lt-sm"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            @click="store.deletePictures(props.row)"
            class="glossy"
            icon="fa-solid fa-trash"
            rounded
            color="negative"
            label="Delete"
          />
        </q-td>
      </template>
      <template v-slot:item="props">
        <q-card class="q-ma-sm">
          <q-card-section>
            <div class="text-caption text-grey">isOriginal</div>
            {{ props.row.isoriginal }}
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-grey">timestamp</div>
            {{ props.row.timestamp }}
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-grey">img</div>
            <!-- {{ props.row.img }} -->
            <img class="img" :src="props.row.img" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-grey">image</div>
            {{ props.row.image }}
          </q-card-section>
          <q-card-section>
            <q-btn
              @click="store.deletePictures(props.row)"
              class="glossy"
              icon="fa-solid fa-trash"
              rounded
              color="negative"
              label="Delete"
            />
          </q-card-section>
        </q-card>
      </template>
    </q-table>
  </div>

  <div
    class="container d-flex flex-column align-items-center q-mt-md q-ml-sm q-mr-sm"
  >
    <q-table
      :rows="store.pictures"
      :columns="cols"
      row-key="id"
      title="Pictures"
      class="gt-xs"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            @click="store.deletePictures(props.row)"
            class="glossy"
            icon="fa-solid fa-trash"
            rounded
            color="negative"
            label="Delete"
          />

          <q-btn
            rounded
            icon="fa-solid fa-pencil"
            class="glossy q-ml-sm"
            label="Update"
            color="primary"
            @click="prompt = true"
          />

          <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">Image name</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  v-model="imagename"
                  autofocus
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn
                  @click="store.updatePictures(props.row, imagename)"
                  flat
                  label="Update"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-td>
      </template>
      <template v-slot:body-cell-img="props">
        <q-td :props="props">
          <img class="img" :src="props.row.img" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<style lang="css" scoped>
.tablecard {
  background-color: #5ecedc;
}
.img {
  width: 300px;
}
</style>

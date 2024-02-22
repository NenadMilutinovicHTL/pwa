<script setup>
import { usePicturesStore } from '../stores/picturesStore';

const store = usePicturesStore();
store.getPictures();

const cols = [
  {
    name: 'isOriginal',
    field: 'isOriginal',
    label: 'isOriginal',
    align: 'left',
  },
  {
    name: 'timestamp',
    field: 'timestamp',
    label: 'timestamp',
    align: 'left',
    width: '4%',
  },
  { name: 'img', field: 'img', label: 'img', align: 'left' },
  { name: 'image', field: 'image', label: 'image', align: 'left' },
  { name: 'delete', field: 'delete', label: 'Delete', align: 'left' },
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
  <div class="q-mt-md q-ml-sm q-mr-sm">
    <q-card>
      <q-table
        grid
        title="Pictures"
        :rows="formatPictures(store.pictures)"
        :columns="cols"
        row-key="name"
        :pagination="{ rowsPerPage: 10 }"
        class="lt-sm"
      >
      </q-table>
    </q-card>
    <div class="container d-flex flex-column align-items-center">
      <q-table
        :rows="formatPictures(store.pictures)"
        :columns="cols"
        row-key="id"
        title="Pictures"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              @click="store.deletePictures(props.row)"
              class="glossy"
              icon=""
              rounded
              color="negative"
              label="Delete"
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tablecard {
  background-color: #5ecedc;
}
</style>

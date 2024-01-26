<script setup>
import { usePicturesStore } from '../stores/picturesStore';

const store = usePicturesStore();
store.getPictures();

const cols = [
  { name: 'isOriginal', field: 'isOriginal', label: 'isOriginal', align: 'left' },
  { name: 'timestamp', field: 'timestamp', label: 'timestamp', align: 'right' },
  { name: 'img', field: 'img', label: 'img', align: 'left' },
  { name: 'image', field: 'image', label: 'image', align: 'left' },
];
</script>

<template>
  <div class="q-mt-md q-ml-sm q-mr-sm">
    <q-card>
      <q-table
        grid
        title="Pictures"
        :rows="store.pictures"
        :columns="cols"
        row-key="name"
        :pagination="{ rowsPerPage: 10 }"
        class="lt-sm"
      >
      </q-table>
    </q-card>
    <q-card>
      <q-table
        title="Pictures"
        :rows="store.pictures"
        :columns="cols"
        row-key="name"
        :pagination="{ rowsPerPage: 10 }"
        class="gt-xs"
      >
      </q-table>
    </q-card>
  </div>
</template>

<style lang="css" scoped></style>

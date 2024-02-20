<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);


const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="text-white"
      height-hint="98"
      style="background-color: #000"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />
        <q-toolbar-title class="raleway">
          <q-avatar>
            <img src="/public/Icon.png" />
          </q-avatar>
          Bildbearbeitung
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left" class="gt-sm">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/camera" label="Camera" />
        <q-route-tab to="/data" label="Data" />
        <q-route-tab to="/impressum" label="Impressum" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-tabs vertical>
        <q-route-tab to="/" label="Home" icon="fa fa-home" />
        <q-route-tab to="/camera" label="Camera" icon="fa fa-info"/>
        <q-route-tab to="/data" label="Data" icon="fa fa-info" />
        <q-route-tab to="/impressum" label="Impressum" icon="fa fa-info"/>
      </q-tabs>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
body {
  background-color: #dbdbdb;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Raleway';
  src: url('/fonts/Raleway/Raleway-ExtraBold.ttf');
}

.raleway {
  font-family: 'Raleway';
}

* {
  font-family: 'Montserrat';
}
</style>

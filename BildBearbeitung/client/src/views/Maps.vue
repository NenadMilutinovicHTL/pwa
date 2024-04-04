<template>
  <div class="center">
    <div id="pos" style="width: 300px; height: 200px"></div>
    <div class="flex items-center justify-center py-2">
      <q-btn @click="showCoordinates" class="mapsBtn"> show Koordinaten </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = 'http://maps.google.com/maps/api/js?sensor=true';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
  methods: {
    initialize(coords) {
      var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
      var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      var map = new google.maps.Map(document.getElementById('pos'), myOptions);

      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Hier bist du :)',
      });
    },
    showCoordinates() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.initialize(position.coords);
        },
        () => {
          document.getElementById('pos').innerHTML =
            'Deine Position konnte leider nicht ermittelt werden';
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.mapsBtn {
  background-color: #5edc97;
  margin-top: -300px;
}
</style>

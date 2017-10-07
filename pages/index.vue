
<script>
import VueOnsen from 'vue-onsenui'
import Vue2Leaflet from 'vue2-leaflet'
import leafletfullscreen from 'leaflet-fullscreen'
import CustomToolbar from '../components/CustomToolbar.vue'
import AppNavigator from '../components/AppNavigator.vue'
import vmap from '../plugins/vue2-leaflet/src/components/Map.vue'
import vtilelayer from '../plugins/vue2-leaflet/src/components/TileLayer.vue'
import vmarker from '../plugins/vue2-leaflet/src/components/Marker.vue'

export default {
  render: h => h(AppNavigator),
  beforeCreate() {
  // Shortcut for Material Design
  Vue.prototype.md = this.$ons.platform.isAndroid()
},
  components: {
    CustomToolbar,
    vmap,
    vtilelayer,
    vmarker,
  }
}



</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

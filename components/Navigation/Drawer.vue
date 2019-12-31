<template>
  <v-navigation-drawer app class="primary subheading" v-model="drawerVisiblity">
    <v-layout column align-center>
      <v-flex >
        <v-avatar size="100">
          <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
        </v-avatar>
      </v-flex>
    </v-layout>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Drawer extends Vue {
  drawerVisiblity: Boolean = true
}
</script>

<style>
.v-list__tile {
  font-size: 16px;
  font-style: bold;
}
</style>

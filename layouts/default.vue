<template>
  <v-app color="primary">
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // Navbar: () => import("~/components/Navigation/Navbar.vue")
  }
})
export default class Default extends Vue {}
</script>
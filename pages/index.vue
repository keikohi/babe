<template>
  <v-card class="overflow-hidden">
    <Menu v-bind:menuVisibulity="menuVisibulity"/>
    <v-app-bar
      absolute
      color="#FC317A"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(3,49,122,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon @click="toggleMenu()"></v-app-bar-nav-icon>
      <v-toolbar-title>Ryuichi Eno</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon color="yellow" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent">
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="700">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
   
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "~/components/Navigation/Menu.vue"

// { title: 'Click Me' },
interface item {
  title: string;
}

@Component({
  components: {
    Menu
  }
})

export default class Index extends Vue {
  items: item[] = [{ title: "Click Me" }, { title: "Click Me" }];

  menuVisibulity: boolean = false;

  toggleMenu(): void {
    this.menuVisibulity = !this.menuVisibulity;
  }

}
</script>
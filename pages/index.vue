<template>
  <v-card class="overflow-hidden">
    <Menu v-bind:menuVisibulity="menuVisibulity" />
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
        <v-img
          v-bind="props"
          gradient="to top right, rgba(3,49,122,.7), rgba(25,32,72,.7)"
        ></v-img>
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
        <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          class="elevation-2"
          dark
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.key"
            align-with-title
            background-color="transparent"
          >
            {{ tab.title }}
          </v-tab>
          <v-tabs-items v-model="tab">
          <v-tab-item v-for="tab in tabs" :key="tab.key" >
            <v-card flat tile>
              <v-card-text>{{ tab.text }}</v-card-text>
            </v-card>
          </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="700"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "~/components/Navigation/Menu.vue";

interface item {
  title: string;
}
interface tab{
  title: string;
  text: string;
  key: string;
}

@Component({
  components: {
    Menu
  }
})

export default class Index extends Vue {
  tab: string = "home"
  items: item[] = [{ title: "My Account" }, { title: "Sign Out" }];
  tabs: tab[] = [{ title: "home", text: "home", key: "home" },
                { title: "search", text: "search user", key: "search" },
                { title: "history", text: "history", key: "history" },
                { title: "setting", text: "about settings", key: "setting" }];

  menuVisibulity: boolean = false;

  toggleMenu(): void {
    this.menuVisibulity = !this.menuVisibulity;
  }
}
</script>

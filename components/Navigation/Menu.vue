
<template>
  <v-navigation-drawer v-model="menuVisibulity" absolute temporary >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list >
      <v-list-item v-for="link in links" :key="link.text" link>
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import Drawer from "./components/Navigation/Drawer.vue"

interface link {
  icon: string;
  text: string;
  route: string;
}

@Component({
  components: {}
})
export default class Menu extends Vue {

  @Prop() menuVisibulity!: boolean;
  drawerVisiblity: boolean = true;
  drawer: boolean = true;

  links: link[] = [
    { icon: "home", text: "ホーム", route: "/" },
    { icon: "textsms", text: "xx", route: "/draft" },
    { icon: "person_outline", text: "xx", route: "/mypage" },
    { icon: "favorite_border", text: "xx", route: "/status" },
    { icon: "trending_up", text: "xx", route: "/analysis" },
    { icon: "description", text: "xx", route: "/memo" },
    { icon: "settings_applications", text: "xx", route: "/setting" }
  ];
}
</script>
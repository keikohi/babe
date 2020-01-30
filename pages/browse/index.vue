<template>
  <v-card class="mx-auto">
    <v-app-bar dark color="#FE3C72">
      <v-spacer></v-spacer>
      <v-toolbar-title>Browse</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col v-for="user in users" :key="user.userName" cols="12">
          <v-card color="#FE3C72" dark max-height="150" @click="$router.push('/public/'+user.name)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="py-0"> <span><v-icon>mdi-heart</v-icon></span>{{user.like}} </v-card-title>  
                <v-card-title class="display-2 py-1">{{user.name}} </v-card-title>
                <v-card-text class="subtitle-1 py-0">{{user.email}}</v-card-text>
                <v-card-text class="subtitle-1 py-0">loves {{user.sexualOrientation}}</v-card-text>
              </div>
              
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="user.img"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  data: () => ({
    users: [],
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  }),
  created() {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let data = doc.data();
          data.name = doc.id;
          data.img =
            "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png";
          data.like = data.like == null ? 0 : data.like
          this.users.push(data);
        });
      })
      .catch(err => console.log(err));
  },
  methods: {
    userName(i) {
      return Object.keys(this.users[i])[0];
      // return this.users[i]
    },
    sex(i) {
      return this.users[i][this.userName(i)].sex;
    }
  }
};
</script>
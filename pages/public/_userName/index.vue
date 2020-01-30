<template>
  <div class="my-5">
    <v-card dark color="#FE3C72" class="mx-auto" max-width="344">
      <v-img
        src="https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FEigaBoard%252FEigaBoard_1338_77b7_1.jpg"
        height="200px"
      ></v-img>

      <v-card-title class="display-2 py-2">{{this.$nuxt.$route.params.userName}}</v-card-title>
      <v-card-text class="headline py-0">{{profile.email}}</v-card-text>
      <v-card-text class="headline py-0">sex: {{profile.sex}}</v-card-text>
      <v-card-text class="headline py-0">loves {{profile.sexualOrientation}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <span>
          <span class="display-1 my-0 py-0">{{this.profile.like}}</span>
          <v-btn color="white" @click="like()">
            <v-icon color="#FE3C72">mdi-heart</v-icon>
          </v-btn>
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      profile: ""
    };
  },
  created() {
    firebase
      .firestore()
      .collection("users")
      .doc(this.$nuxt.$route.params.userName)
      .get()
      .then(doc => {
        const data = doc.data();
        this.profile = {
          sex: data.sex,
          email: data.email,
          sexualOrientation: data.sexualOrientation,
          like: data.like == null ? 0 : data.like
        };
      })
      .catch(err => console.log(err));
  },

  methods: {
    like() {
      firebase
        .firestore()
        .collection("users")
        .doc(this.$nuxt.$route.params.userName)
        .update({
          like: this.profile.like + 1
        })
        .then((this.profile.like += 1))
        .catch(error => console.log(error));
    }
  }
};
</script>
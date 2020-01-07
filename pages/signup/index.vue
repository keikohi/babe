
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="firstName" label="First Name" filled></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="lastName" label="Last Name" filled></v-text-field>
        </v-col>
        <v-btn @click="click()" color="#3cd1c2">
          <v-icon>button</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component
export default class SignUp extends Vue {
  drawer: boolean = true;

  firstName: string = "Ryuichu";
  lastName: string = "Enomoto";

  click(): void {
    this.$store.dispatch("action/postUser", {
      userName: this.firstName+" "+this.lastName
    });
  }
}
</script>
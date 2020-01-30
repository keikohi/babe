<template>
  <v-form >
    <v-text-field v-model="form.userName"  :counter="10" label="Name" required></v-text-field>
    <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
    <v-btn color="#FE3C72" @click="emitFormEvent()">Next</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: "",
        email: ""
      }
    };
  },
  methods: {
    emitFormEvent() {
      this.$emit("formEvent", this.form);
    }
  }
};
</script>
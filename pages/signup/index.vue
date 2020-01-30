<template>
  <div>
    <v-row justify="space-around">
      <v-col cols="12"></v-col>
    </v-row>
    <v-stepper v-model="e1" :alt-labels="true">
      <v-stepper-header>
        <template v-for="n in questionList.length">
          <v-stepper-step
            color="#FE3C72"
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            :editable="true"
          >Step {{ n }}</v-stepper-step>
          <v-divider v-if="n !== questionList.length" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content v-for=" n in questionList.length" :key="`${n}-content`" :step="n">
          <v-card class="mb-12" color="white" height="100px" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <!-- n start from 1... -->
                <v-list-item-title class="headline mb-1">Question {{n}}</v-list-item-title>
                <v-list-item-subtitle class="headline mb-1">{{questionList[n-1].question}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <Form  v-if="n===1" v-on:formEvent="getForm" />
          <v-btn
            v-else
            class="mx-3"
            dark
            color="#FE3C72"
            @click="setAnswer(n, nchoise)"
            v-for="nchoise in questionList[n-1].choise.length"
            :key="nchoise"
          >{{questionList[n-1].choise[nchoise-1]}}</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import Form from "@/components/register/Form";

const FORM = 1;
const SEX = 2;
const SEXUAL_ORIENTATION = 3;
export default {
  components: {
    Form
  },
  data() {
    return {
      e1: 1,
      currentStep: 1,
      questions: [],
      questionList: [
        { step: 1, question: "What's your name?", choise: [] },
        { step: 2, question: "I'm a ", choise: ["man", "woman", "other"] },
        {
          step: 3,
          question: "I'm interested in ",
          choise: ["men", "women", "both"]
        }
      ],
      answers: {
        form: null,
        sex: null,
        sexualOrientation: null
      }
    };
  },
  //   computed: {
  //     sortedQuestions() {
  //       return this.questions.sort((a, b) => a.step - b.step);
  //     }
  //   },

  methods: {
    getForm(form) {
      this.answers.form = form;
      this.e1 = this.e1 + 1;
    },
    setAnswer(nStep, nchoise) {
      switch (nStep) {
        case SEX:
          this.answers.sex = this.questionList[nStep - 1].choise[nchoise - 1];
          break;
        case SEXUAL_ORIENTATION:
          this.answers.sexualOrientation = this.questionList[nStep - 1].choise[
            nchoise - 1
          ];
          break;
        default:
          console.log("no match step");
      }
      this.nextStep(nStep);
    },
    nextStep(n) {
      if (n === this.questionList.length) {
        this.register();
        this.$router.push("/profile/" + this.answers.form.userName);
      } else {
        this.e1 = n + 1;
      }
    },
    register() {
      firebase
        .firestore()
        .collection("users")
        .doc(this.answers.form.userName)
        .set({
          email: this.answers.form.email,
          sex: this.answers.sex,
          sexualOrientation: this.answers.sexualOrientation
        });
    }
  }
  //   mounted() {
  // this.fetchProfileQuestions();
  // const compare = (a, b) => b.step -a.step;
  // this.questions.sort(compare);
  //   }
};
</script>
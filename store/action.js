export const state = () => ({})

import firebase from '../plugins/firebase'

export const actions = {
  postUser({ store }, { userName }) {
    firebase.firestore().collection('userName').add({
      userName: userName
    })
  },
  fetchProfileQuestions() {
    let questions = []
    firebase.firestore().collection('question').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const question = {
          step: doc.step,
          question: doc.question,
          choice: doc.choice
        }
        questions.push(question)
      })
      return questions
    })
    .catch(err => console.log(err))
  }
}

export const mutations = {}

export const getters = {}

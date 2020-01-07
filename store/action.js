export const state = () => ({})

import firebase from '../plugins/firebase'
export const actions = {
  postUser({ store }, { userName }) {
    firebase.firestore().collection('userName').add({
      userName: userName
    })
  }
}

export const mutations = {}

export const getters = {}

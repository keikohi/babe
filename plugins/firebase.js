import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({

    apiKey: "AIzaSyBL2RFED2kQLDhn5NGk8TPsF3i0LHMDXLk",
    authDomain: "babe-backend.firebaseapp.com",
    databaseURL: "https://babe-backend.firebaseio.com",
    projectId: "babe-backend",
    appId: "1:167863674838:web:cf91e956558f01018ee677",
  })
}

// const db = firebase.firestore()
// const settings = { timestampsInSnapshots: true }
// db.settings(settings)
export default firebase

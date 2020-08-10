import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB4mo26LIax8msJfwiTxRa03oDbadxDmtI',
  authDomain: 'devter-5e51a.firebaseapp.com',
  databaseURL: 'https://devter-5e51a.firebaseio.com',
  projectId: 'devter-5e51a',
  storageBucket: 'devter-5e51a.appspot.com',
  messagingSenderId: '140934138024',
  appId: '1:140934138024:web:622569a60e6249114c9a9d',
  measurementId: 'G-64RJ7QNTGT',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
